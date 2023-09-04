import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type PlasmaMaterialOptions = {
  colors?: THREE.Color[];
  frequency?: {
    x: number;
    y: number;
    z: number;
  };
  intensivity?: number;
  time?: number;
};

export const usePlasmaMaterial = (
  options: PlasmaMaterialOptions = {},
) => {
  const {
    colors = [new THREE.Color("red"), new THREE.Color("blue")],
    frequency: { x = 10.0, y = 10.0, z = 10.0 } = {},
    intensivity = 1000.0,
    time = 1.0,
  } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform vec3 colors[${colors.length}];
      uniform vec3 frequency;
      uniform float time;
      uniform float intensivity;
      varying vec2 vUv;

      void main() {
        vec3 color = vec3(
          sin(vUv.x * frequency.x + time),
          cos(vUv.y * frequency.y + time),
          sin(vUv.x * vUv.y * frequency.z + time)
        );

        float plasmaIndex = (color.x + color.y + color.z) / 2.0;

        vec3 finalColor = colors[0];

        for (int i = 1; i < ${colors.length}; i++) {
          if (plasmaIndex < float(i) / float(${colors.length})) {
            finalColor = mix(colors[i - 1], colors[i], (plasmaIndex - float(i - 1) / float(${colors.length})) * float(${colors.length}));
            break;
          }
        }

        // Apply blur effect (if intensivity > 0)
        float blur = intensivity * 0.01; // Scale intensivity for effect
        vec3 blurredColor = finalColor;
        if (intensivity > 0.0) {
          for (int i = 0; i < 5; i++) {
            blurredColor += finalColor * blur;
          }
          blurredColor /= 5.0;
        }

        gl_FragColor = vec4(blurredColor, 1.0);
      }
    `,
    uniforms: {
      colors: { value: colors },
      frequency: { value: new THREE.Vector3(x, y, z) },
      intensivity: { value: intensivity },
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
