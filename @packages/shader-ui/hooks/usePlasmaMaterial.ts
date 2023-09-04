import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const usePlasmaMaterial = (
  options: {
    frequency?: {
      x: number;
      y: number;
      z: number;
    };
    time?: number;
  } = {},
) => {
  const {
    frequency: { x = 10.0, y = 10.0, z = 10.0 } = {},
    time = 0.1,
  } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform vec3 frequency;
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 color = vec3(
          sin(vUv.x * frequency.x + time),
          cos(vUv.y * frequency.y + time),
          sin(vUv.x * vUv.y * frequency.z + time)
        );
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      frequency: { value: new THREE.Vector3(x, y, z) },
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
  });

  return material;
};
