// This file is based on https://github.com/brybrant/lava-lamp
// Original license: GNU General Public License v3.0
// See LICENSE file for details.
// Modifications:
// - Include uBackgroundColor and uLavaColor
// - Add noise overlay shader


precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uCameraPosition;
uniform vec3 uBackgroundColor;
uniform vec3 uLavaColor;

// Based on https://www.shadertoy.com/view/fsKXDm

// Noise functions
// Based on https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float rand(vec2 n) { 
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);
  
  float res = mix(
    mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x),
    mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
  return res*res;
}

#define MAX_STEPS 30
#define MAX_DIST 30.0
#define MIN_DIST 1.5
vec4 sphere = vec4(0.0, 0.0, 0.0, 1.0);
vec3 lightpos = vec3(-30.0, 2.0, 0.0);
float ballspeed = 0.125;

float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float getDist(vec3 raypos) {
  float time = uTime * ballspeed;
  float botPlane = raypos.y + 2.0;
  float topPlane = 2.0 - raypos.y;

  float sphereMiddle = length(
    raypos - vec3(
      0.0,
      sin(time + 2.0) * 3.0,
      sin(time)
    )
  ) - 1.5;

  float sphereRight = length(
    raypos - vec3(
      -1.0,
      sin(time) * 2.0,
      4.0 + cos(time)
    )
  ) - 1.5;

  float sphereLeft = length(
    raypos - vec3(
      -1.0,
      sin(time + 4.0) * 2.0,
      -4.0 - cos(time)
    )
  ) - 1.5;

  float sphereBackRight = length(
    raypos - vec3(
      3.0,
      sin(time * 0.75 + 6.0) * 2.0,
      2.5 - cos(time * 0.75)
    )
  ) - 2.0;

  float sphereBackLeft = length(
    raypos - vec3(
      3.0,
      sin(time * 0.75 + 9.0) * 2.0,
      -2.5 + cos(time * 0.75 + 3.0)
    )
  ) - 2.0;

  float dist = opSmoothUnion(botPlane, topPlane, 1.0);
  dist = opSmoothUnion(dist, sphereMiddle, 1.0);
  dist = opSmoothUnion(dist, sphereRight, 1.0);
  dist = opSmoothUnion(dist, sphereLeft, 1.0);
  dist = opSmoothUnion(dist, sphereBackRight, 1.0);
  dist = opSmoothUnion(dist, sphereBackLeft, 1.0);
  
  return dist;
}

vec3 getNormal(vec3 p) {
  return normalize(sphere.xyz - p);
}

float getLight(vec3 p) {
  vec3 lightdir = normalize(lightpos - p);
  vec3 normal = getNormal(p);
  float diff = dot(normal,lightdir);
  return diff;
}

float raymarch(vec3 camera, vec3 dir) {
  float dist = 1.5;

  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 pos = camera + dir * dist;
    float stepdist = getDist(pos);
    dist += stepdist;
    if (dist > MAX_DIST || dist < MIN_DIST) break;
  }

  return dist;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - uResolution.xy * 0.5) / uResolution.y;
  vec3 col = vec3(0.0);

  vec3 camera = uCameraPosition;

  vec3 ray = vec3(1.0, uv.y, uv.x);

  float d = raymarch(camera, normalize(ray));

  vec3 p = camera + ray * d;

  float diff = getLight(p);

  col += vec3(1.0 - diff);
  col = col * 0.5;
  
  // Generate noise with extremely decreased scale (extremely large pattern)
  float noiseScale = 0.7; // Decreased by 1000% from 11.11
  float noiseValue = noise(gl_FragCoord.xy / noiseScale + uTime * 0.01);
  
  // Add a second layer of noise for more detail
  float noiseValue2 = noise(gl_FragCoord.xy / (noiseScale * 0.3) + vec2(uTime * 0.02, -uTime * 0.01));
  
  // Add a third layer for even more fine detail
  float noiseValue3 = noise(gl_FragCoord.xy / (noiseScale * 0.1) + vec2(-uTime * 0.03, uTime * 0.02));
  
  // Blend all noise layers with different weights
  noiseValue = (noiseValue * 0.5 + noiseValue2 * 0.3 + noiseValue3 * 0.2);
  
  // Apply noise to the final color
  vec3 finalColor = mix(
    uBackgroundColor,
    uLavaColor,
    col
  );
  
  // Blend noise with the final color - increased strength for more visibility
  float noiseStrength = 0.06; // Increased strength to make it more noticeable
  finalColor = mix(finalColor, finalColor * (1.0 - noiseStrength) + vec3(noiseValue) * noiseStrength, 0.95);
  
  gl_FragColor = vec4(finalColor, 1.0);
}
