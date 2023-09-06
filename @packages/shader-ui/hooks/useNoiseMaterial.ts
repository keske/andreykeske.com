import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type NoiseMaterialOptions = {
  density?: number;
  time?: number;
};

export const useNoiseMaterial = (
  options: NoiseMaterialOptions = {},
) => {
  const { density = 0.0000005, time = 1.0 } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      uniform float density;
      varying vec2 vUv;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(112.9898, 178.233))) * 43758.5453);
      }

      void main() {
        float noiseValue = random(vUv * density + time) * 2.0 - 1.0;
        gl_FragColor = vec4(vec3(noiseValue), 1.0);
      }
    `,
    uniforms: {
      density: { value: density },
      time: { value: time },
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();

    material.uniforms.density.value = Math.sin(
      clock.getElapsedTime() * time,
    );
  });

  return material;
};
