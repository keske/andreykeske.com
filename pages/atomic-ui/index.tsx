import {
  Box,
  OrbitControls,
  RoundedBox,
  Sphere,
  Text,
  Text3D,
} from "@react-three/drei";
import {
  Canvas,
  MeshProps,
  ReactThreeFiber,
  useFrame,
} from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import type { NextPage } from "next";

const useNoiseMaterial = (density: number = 0.0000005) => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      uniform float density;
      varying vec2 vUv;
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(112.9898, 178.233))) * 43758.5453);
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

  useFrame(({ clock }, delta) => {
    material.uniforms.time.value = clock.getElapsedTime();

    material.uniforms.density.value = Math.sin(
      clock.getElapsedTime() * 0.000001,
    );
    // material.uniforms.density.value += delta / 100000;

    // console.log(Math.sin(clock.getElapsedTime() * 0.000001));
  });

  return material;
};

type NoiseBoxProps = Partial<
  Omit<MeshProps, "args"> & {
    args?:
      | [
          width?: number | undefined,
          height?: number | undefined,
          depth?: number | undefined,
          widthSegments?: number | undefined,
          heightSegments?: number | undefined,
          depthSegments?: number | undefined,
        ]
      | undefined;
  }
>;

const NoiseBox = React.forwardRef<THREE.Mesh, NoiseBoxProps>(
  (props, forwardedRef) => {
    const material = useNoiseMaterial(0.000000005);

    return <Box material={material} ref={forwardedRef} {...props} />;
  },
);

export declare type NamedArrayTuple<T extends (...args: any) => any> =
  Parameters<T>;

type NoiseSphereRoundedBox = Omit<MeshProps, "args"> & {
  args?: NamedArrayTuple<
    (width?: number, height?: number, depth?: number) => void
  >;
  creaseAngle?: number;
  radius?: number;
  smoothness?: number;
  steps?: number;
};

const NoiseRoundedBox = React.forwardRef<
  THREE.Mesh,
  NoiseSphereRoundedBox
>((props, forwardedRef) => {
  const material = useNoiseMaterial();

  return (
    <RoundedBox material={material} ref={forwardedRef} {...props} />
  );
});

type NoiseSphereProps = Partial<
  Omit<MeshProps, "args"> & {
    args?:
      | [
          radius?: number | undefined,
          length?: number | undefined,
          capSegments?: number | undefined,
          radialSegments?: number | undefined,
        ]
      | undefined;
  }
>;

const NoiseSphere = React.forwardRef<THREE.Mesh, NoiseSphereProps>(
  (props, forwardedRef) => {
    const material = useNoiseMaterial();

    return (
      <Sphere material={material} ref={forwardedRef} {...props} />
    );
  },
);

type NoiseTextProps = React.PropsWithChildren;

const NoiseText = React.forwardRef<THREE.Mesh, NoiseTextProps>(
  (props, forwardedRef) => {
    const material = useNoiseMaterial(0.0000005);

    // @ts-expect-error WIP
    return <Text material={material} ref={forwardedRef} {...props} />;
  },
);

const AtomicUI: NextPage = () => (
  <div className="h-screen w-screen">
    <Canvas
      camera={{
        position: [3, 2, 7],
      }}
      className="h-screen w-screen"
    >
      <OrbitControls />
      <NoiseBox args={[1, 1, 1]} position={[1, 2, 1]} />
      <NoiseSphere position={[1, -2, 1]} />
      <NoiseRoundedBox
        args={[1, 0.3, 0.1]}
        position={[-2, -2, 1]}
        radius={0.09}
      />
      <NoiseText position={[1, 2, 2]}>METHAPHORS</NoiseText>
    </Canvas>
  </div>
);

export default AtomicUI;
