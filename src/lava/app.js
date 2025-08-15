// This file is based on https://github.com/brybrant/lava-lamp
// Original license: GNU General Public License v3.0
// See LICENSE file for details.
// Modifications
// - Wrap script into a start function

import * as TWGL from "twgl.js"

import fragmentShader from "./glsl/fragment.glsl?raw"
import vertexShader from "./glsl/vertex.glsl?raw"

/**
 * Initializes a WebGL-based lava animation in the background canvas.
 * The animation uses spherical coordinates to position the camera and renders
 * a full-screen quad with custom shaders.
 *
 * This function is designed to be called only in browser environments and is
 * safely wrapped in the LavaBackground component which is marked as clientOnly.
 *
 * @param {Object} options Configuration options
 * @param {number[]} [options.backgroundColor=[0.4, 0.1, 0.4]] Background color as RGB array
 * @param {number[]} [options.lavaColor=[2.0, 0.8, -0.6]] Lava color as RGB array
 * @returns {{start: () => (number | undefined), stop: () => void, renderSingleFrame: () => void, updateColors: (newColors: {backgroundColor?: number[], lavaColor?: number[]}) => void, webglNotAvailable: boolean}} An object with animation control functions.
 * @throws {Error} If WebGL context cannot be obtained or shader compilation fails
 */
export function startLavaAnimation(initialOptions = {}) {
  let { backgroundColor = [0.4, 0.1, 0.4], lavaColor = [2.0, 0.8, -0.6] } = initialOptions
  // Calculate camera position
  // based on THREE.Vector3.setFromSphericalCoords(radius, phi, theta)
  const DEG_TO_RAD = Math.PI / 180

  const cameraRadius = 6
  const cameraPhi = 90 * DEG_TO_RAD
  const cameraTheta = 270 * DEG_TO_RAD

  const sinPhiRadius = Math.sin(cameraPhi) * cameraRadius

  const cameraPosition = [
    sinPhiRadius * Math.sin(cameraTheta), // X
    Math.cos(cameraPhi) * cameraRadius, // Y
    sinPhiRadius * Math.cos(cameraTheta), // Z
  ]

  // Get the canvas element and WebGL context
  const canvasElement = document.getElementById("background")
  if (!(canvasElement instanceof HTMLCanvasElement)) {
    console.error("Canvas element #background not found or is not an HTMLCanvasElement.")
    return {
      start: () => undefined,
      stop: () => { },
      renderSingleFrame: () => { },
      updateColors: () => { },
      webglNotAvailable: true,
    }
  }

  // Now we know it's an HTMLCanvasElement
  const canvas = canvasElement

  // Disable unnecessary context attributes for better performance
  // Alpha blending against HTML background is not needed for fullscreen canvas
  // Depth and stencil buffers are not used in this 2D shader effect
  // Antialiasing is handled by the shader itself
  const contextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
  }

  // Prefer WebGL2 for better performance, fallback to WebGL1
  // WebGL2 provides free API optimizations even when not using WebGL2-specific features
  const gl = /** @type {WebGLRenderingContext|WebGL2RenderingContext|null} */ (
    canvas.getContext("webgl2", contextAttributes) ||
    canvas.getContext("webgl", contextAttributes)
  )

  if (!gl) {
    console.error("WebGL context not available on the canvas element.")
    return {
      start: () => undefined,
      stop: () => { },
      renderSingleFrame: () => { },
      updateColors: () => { },
      webglNotAvailable: true,
    }
  }
  const programInfo = TWGL.createProgramInfo(gl, [vertexShader, fragmentShader])

  // Set up the shader program once - no need to call this every frame
  gl.useProgram(programInfo.program)

  const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  }

  const bufferInfo = TWGL.createBufferInfoFromArrays(gl, arrays)

  // Set up buffers and attributes once - no need to call this every frame
  TWGL.setBuffersAndAttributes(gl, programInfo, bufferInfo)

  // Set canvas size and viewport only when window is resized for better performance
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gl.viewport(0, 0, window.innerWidth, window.innerHeight)
  }

  // Listen for window resize events to update canvas size
  window.addEventListener('resize', resize)

  // Initialize canvas size
  resize()

  let frameId = null
  let animationTime = Math.round(300 * Math.random()) // Randomize the animation start within 5minutes
  let lastFrameTime = 0

  function render(time, singleFrame = false) {
    // Calculate delta time and add it to our animation time
    if (!singleFrame && lastFrameTime > 0) {
      const deltaTime = (time - lastFrameTime) * 0.001 // Convert to seconds
      animationTime += deltaTime
    }
    if (!singleFrame) {
      lastFrameTime = time
    }

    const uniforms = {
      uTime: animationTime / 2,
      uResolution: [window.innerWidth, window.innerHeight],
      uCameraPosition: cameraPosition,
      uBackgroundColor: backgroundColor,
      uLavaColor: lavaColor,
    }

    try {
      // useProgram and setBuffersAndAttributes are now called once outside the render loop
      TWGL.setUniforms(programInfo, uniforms)
      TWGL.drawBufferInfo(gl, bufferInfo)
    } catch (error) {
      console.error(error)
      return cancelAnimationFrame(frameId)
    }

    // Only request a new animation frame if not in single frame mode
    if (!singleFrame) {
      frameId = requestAnimationFrame(render)
    }
  }

  // Return start, stop, and renderSingleFrame functions
  return {
    webglNotAvailable: false,
    start: () => {
      // Only start if not already running
      if (!frameId) {
        // Reset lastFrameTime so we don't get a huge delta on first frame
        lastFrameTime = 0
        frameId = requestAnimationFrame(render)
      }
      return frameId
    },
    stop: () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
        frameId = null
      }
    },
    renderSingleFrame: () => {
      // Stop any running animation first
      if (frameId) {
        cancelAnimationFrame(frameId)
        frameId = null
      }
      // Render a single frame without advancing the animation time
      render(performance.now(), true)
    },
    updateColors: (newColors) => {
      if (newColors.backgroundColor) {
        backgroundColor = newColors.backgroundColor
      }
      if (newColors.lavaColor) {
        lavaColor = newColors.lavaColor
      }
      // If animation is not running, render a single frame to show the new colors
      if (!frameId) {
        render(performance.now(), true)
      }
    },
  }
}
