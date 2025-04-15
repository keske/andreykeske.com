import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type NebulaMaterialOptions = {
  colors?: THREE.Color[];
  frequency?: {
    x: number;
    y: number;
    z: number;
  };
  glowIntensity?: number;
  timeScale?: number;
};

export const useNebulaMaterial = (
  options: NebulaMaterialOptions = {},
) => {
  const {
    colors = [
      new THREE.Color("darkblue"),
      new THREE.Color("purple"),
      new THREE.Color("magenta"),
      new THREE.Color("cyan"),
    ],
    frequency: { x = 5.0, y = 5.0, z = 10.0 } = {},
    glowIntensity = 1.5,
    timeScale = 0.2,
  } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform vec3 colors[${colors.length}];
      uniform vec3 frequency;
      uniform float time;
      uniform float glowIntensity;
      varying vec2 vUv;

      // Simple 2D noise function for cloud effect
      float noise(vec2 pos) {
        return fract(sin(dot(pos.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      void main() {
        // Layered sin functions for swirling nebula effect
        float waveX = sin(vUv.x * frequency.x + time * 0.3) * 0.5;
        float waveY = cos(vUv.y * frequency.y + time * 0.5) * 0.5;
        float waveZ = sin((vUv.x + vUv.y) * frequency.z + time * 0.2) * 0.5;

        float cloudNoise = noise(vUv * 10.0 + vec2(time * 0.5, time * 0.3)) * 0.5;
        float nebulaPattern = waveX + waveY + waveZ + cloudNoise;

        // Blend colors based on nebula pattern intensity
        vec3 finalColor = colors[0];
        for (int i = 1; i < ${colors.length}; i++) {
          if (nebulaPattern < float(i) / float(${colors.length})) {
            finalColor = mix(colors[i - 1], colors[i], (nebulaPattern - float(i - 1) / float(${colors.length})) * float(${colors.length}));
            break;
          }
        }

        // Apply glow intensity for radiant effect
        gl_FragColor = vec4(finalColor * glowIntensity, 1.0);
      }
    `,
    uniforms: {
      colors: { value: colors },
      frequency: { value: new THREE.Vector3(x, y, z) },
      glowIntensity: { value: glowIntensity },
      time: { value: 0 },
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
    material.uniforms.time.value = clock.getElapsedTime() * timeScale;
  });

  return material;
};
