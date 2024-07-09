import { Bounds, Plane, RoundedBox } from "@react-three/drei";
import { Canvas as FiberCanvas, useFrame } from "@react-three/fiber";

import React from "react";
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
        return fract(sin(dot(st.xy, vec2(1.9898, 178.233))) * 43758.5453);
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

export const NoiseSurface = React.forwardRef<
  React.ElementRef<typeof RoundedBox>,
  NoiseMaterialOptions
>(({ density = 0.0000005, time = 0.1 }) => {
  const material = useNoiseMaterial({
    density,
    time,
  });

  return (
    <Plane
      args={[30.8, 30.2, 3.1]}
      material={material}
      position={[0, 0, 0]}
    />
  );
});

export const Me: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-3 text-2xl font-black uppercase">
    <FiberCanvas className="opacity-30">
      <Bounds>
        <NoiseSurface />
      </Bounds>
    </FiberCanvas>
  </div>
);
