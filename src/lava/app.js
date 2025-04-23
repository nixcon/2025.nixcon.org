// This file is based on https://github.com/brybrant/lava-lamp
// Original license: GNU General Public License v3.0
// See LICENSE file for details.
// Modifications
// - Wrap script into a start function


import * as TWGL from 'twgl.js';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

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
 * @returns {Object} An object containing start and stop functions to control the animation
 * @returns {Function} start - Function to start the animation
 * @returns {Function} stop - Function to stop the animation
 * @throws {Error} If WebGL context cannot be obtained or shader compilation fails
 */
export function startLavaAnimation({
  backgroundColor = [0.4, 0.1, 0.4],
  lavaColor = [2.0, 0.8, -0.6]
} = {}) {
  // Calculate camera position
  // based on THREE.Vector3.setFromSphericalCoords(radius, phi, theta)
  const DEG_TO_RAD = Math.PI / 180;

  const cameraRadius = 6;
  const cameraPhi = 90 * DEG_TO_RAD;
  const cameraTheta = 270 * DEG_TO_RAD;

  const sinPhiRadius = Math.sin(cameraPhi) * cameraRadius;

  const cameraPosition = [
    sinPhiRadius * Math.sin(cameraTheta), // X
    Math.cos(cameraPhi) * cameraRadius, // Y
    sinPhiRadius * Math.cos(cameraTheta), // Z
  ];

  // Get the canvas element and WebGL context
  const canvas = document.getElementById('background');
  const gl = canvas.getContext('webgl');
  const programInfo = TWGL.createProgramInfo(gl, [vertexShader, fragmentShader]);

  const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  };

  const bufferInfo = TWGL.createBufferInfoFromArrays(gl, arrays);

  let frameId = null;
  let animationTime = Math.round(300 * Math.random()); // Randomize the animation start within 5minutes
  let lastFrameTime = 0;

  function render(time, singleFrame = false) {
    // Calculate delta time and add it to our animation time
    if (!singleFrame && lastFrameTime > 0) {
      const deltaTime = (time - lastFrameTime) * 0.001; // Convert to seconds
      animationTime += deltaTime;
    }
    if (!singleFrame) {
      lastFrameTime = time;
    }
    try {
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      gl.canvas.width = canvasWidth;
      gl.canvas.height = canvasHeight;
      gl.viewport(0, 0, canvasWidth, canvasHeight);

      const uniforms = {
        uTime: animationTime / 2,
        uResolution: [canvasWidth, canvasHeight],
        uCameraPosition: cameraPosition,
        uBackgroundColor: backgroundColor,
        uLavaColor: lavaColor,
      };

      gl.useProgram(programInfo.program);
      TWGL.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      TWGL.setUniforms(programInfo, uniforms);
      TWGL.drawBufferInfo(gl, bufferInfo);
    } catch (error) {
      console.error(error);
      return cancelAnimationFrame(frameId);
    }

    // Only request a new animation frame if not in single frame mode
    if (!singleFrame) {
      frameId = requestAnimationFrame(render);
    }
  }

  // Return start, stop, and renderSingleFrame functions
  return {
    start: () => {
      // Only start if not already running
      if (!frameId) {
        // Reset lastFrameTime so we don't get a huge delta on first frame
        lastFrameTime = 0;
        frameId = requestAnimationFrame(render);
      }
      return frameId;
    },
    stop: () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    },
    renderSingleFrame: () => {
      // Stop any running animation first
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      // Render a single frame without advancing the animation time
      render(performance.now(), true);
    }
  };
}
