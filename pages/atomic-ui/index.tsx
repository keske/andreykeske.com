import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import type { NextPage } from "next";

///////////////////////////////////////////////////////////////////

const AnimatedBox = () => {
  const density = 0.0000005;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      uniform float density;
      varying vec2 vUv;
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }
      void main() {
        float noiseValue = random(vUv * density) * 2.0 - 1.0;
        gl_FragColor = vec4(vec3(noiseValue), 1.0);
      }
    `,
    uniforms: {
      density: { value: density },
      time: { value: 0.0 },
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

    material.uniforms.density.value = Math.asin(
      clock.getElapsedTime() * 0.00001,
    );
  });

  return (
    <Box args={[1, 1, 1]} material={material}>
      <mesh />
    </Box>
  );
};

///////////////////////////////////////////////////////////////////

export type AtomicSurfaceProps = {
  color?: THREE.Color | number | string;
  density?: number;
  height?: number;
  width?: number;
};

export const AtomicSurface: React.FC<AtomicSurfaceProps> = ({
  color = "#FFF",
  density = 10000,
  height = 1,
  width = 2,
}) => {
  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const particlePositions = React.useRef(
    new Float32Array(density * 3),
  );

  const setPosition = React.useCallback(() => {
    const particles = new THREE.BufferGeometry();

    [...Array(density)].forEach((_, i) => {
      const x = Math.random() * width - width / 2;

      const y = Math.random() * height - height / 2;

      const z = (Math.random() * height) / 2;

      particlePositions.current[i * 3] = x;
      particlePositions.current[i * 3 + 1] = y;
      particlePositions.current[i * 3 + 2] = z;
    });

    return new THREE.Points(particles);
  }, [density, height, width]);

  const cloud = React.useMemo(() => {
    const material = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color,
      sizeAttenuation: false,
    });

    const particles = new THREE.BufferGeometry();

    particles.setDrawRange(0, density);

    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(
        particlePositions.current,
        3,
      ).setUsage(THREE.DynamicDrawUsage),
    );

    return new THREE.Points(particles, material);
  }, [color, density]);

  useFrame(() => {
    setPosition();

    if (ref.current) {
      ref.current.geometry.attributes.position.needsUpdate = false;
    }
  });

  return <primitive object={cloud} ref={ref} />;
};

///////////////////////////////////////////////////////////////////

const AtomicUI: NextPage = () => (
  <div className="h-screen w-screen">
    <Canvas
      camera={{
        position: [3, 2, 7],
      }}
      className="h-screen w-screen"
    >
      {/* <AtomicSurface /> */}
      <AnimatedBox />
    </Canvas>
  </div>
);

export default AtomicUI;
