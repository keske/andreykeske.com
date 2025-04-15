import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type JellyfishMaterialOptions = {
  colors?: THREE.Color[];
  frequency?: {
    x: number;
    y: number;
    z: number;
  };
  intensivity?: number;
  timeScale?: number;
};

export const useJellyfishMaterial = (
  options: JellyfishMaterialOptions = {},
) => {
  const {
    colors = [
      new THREE.Color("black"),
      // new THREE.Color("purple"),
      new THREE.Color("pink"),
    ],
    frequency: { x = 16.0, y = 18.0, z = 112.0 } = {},
    intensivity = 1.0,
    timeScale = 0.1,
  } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform vec3 colors[${colors.length}];
      uniform vec3 frequency;
      uniform float time;
      uniform float intensivity;
      varying vec2 vUv;

      void main() {
        float waveX = sin(vUv.x * frequency.x + time * 0.3);
        float waveY = cos(vUv.y * frequency.y + time * 0.5);
        float waveZ = sin((vUv.x + vUv.y) * frequency.z + time * 0.2);
        float pulsate = sin(time * 0.8) * 0.2 + 0.8;

        vec3 color = vec3(waveX, waveY, waveZ);
        float jellyIndex = (color.x + color.y + color.z) / 3.0 * pulsate;

        vec3 finalColor = colors[0];
        for (int i = 1; i < ${colors.length}; i++) {
          if (jellyIndex < float(i) / float(${colors.length})) {
            finalColor = mix(colors[i - 1], colors[i], (jellyIndex - float(i - 1) / float(${colors.length})) * float(${colors.length}));
            break;
          }
        }

        float intensity = intensivity * 0.1 * pulsate;
        gl_FragColor = vec4(finalColor * intensity, 1.0);
      }
    `,
    uniforms: {
      colors: { value: colors },
      frequency: { value: new THREE.Vector3(x, y, z) },
      intensivity: { value: intensivity },
      time: { value: 10 },
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec4 modelPos = modelViewMatrix * vec4(position, 1.0);
        modelPos.y += sin(position.x * 5.0 + time * 0.3) * 0.05;  // Jellyfish-like bobbing
        gl_Position = projectionMatrix * modelPos;
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime() * timeScale;
  });

  return material;
};
