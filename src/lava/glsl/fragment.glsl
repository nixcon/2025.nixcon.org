precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uCameraPosition;

vec3 backgroundColor = vec3(0.4, 0.1, 0.4);
vec3 lavaColor = vec3(2.0, 0.8, -0.6);

// Based on https://www.shadertoy.com/view/fsKXDm

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
  
  gl_FragColor = vec4(
    mix(
      backgroundColor,
      lavaColor,
      col
    ),
    1.0
  );
}