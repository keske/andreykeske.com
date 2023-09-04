import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type Options = {
  density?: number;
  threshold?: number;
  time?: number;
};

export const useStarfieldMaterial = (options: Options = {}) => {
  const { density = 1000.0, threshold = 0.1, time = 0.1 } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float threshold;
      uniform float density;
      uniform float time;
      varying vec2 vUv;

      void main() {
        float stars = step(fract(vUv.x * vUv.y * density + time), threshold);
        gl_FragColor = vec4(vec3(stars), 1.0);
      }
    `,
    uniforms: {
      density: { value: density },
      threshold: { value: threshold },
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
    material.uniforms.time.value = clock.getElapsedTime() * time;
  });

  return material;
};
