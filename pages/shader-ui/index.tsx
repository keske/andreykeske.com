import {
  Box,
  OrbitControls,
  RoundedBox,
  Sphere,
  Text,
} from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
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
    const material = useStarfieldMaterial();

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

const usePlasmaMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 color = vec3(
          sin(vUv.x * 10.0 + time),
          cos(vUv.y * 10.0 + time),
          sin(vUv.x * vUv.y * 10.0 + time)
        );
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
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
  });

  return material;
};

const NoiseRoundedBox = React.forwardRef<
  THREE.Mesh,
  NoiseSphereRoundedBox
>((props, forwardedRef) => {
  const material = usePlasmaMaterial();

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

const useMagneticFieldMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv + vec2(
          sin(time * 2.0),
          cos(time * 1.5)
        ) * 0.1; // Adjust distortion here
        vec3 color = vec3(
          abs(sin(uv.x * 10.0)),
          abs(cos(uv.y * 10.0)),
          sin(uv.x * uv.y * 10.0)
        );
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader: `
      uniform float time;
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

const useTerrainMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 color = vec3(
          abs(sin(vUv.x * 10.0 + time)),
          abs(cos(vUv.y * 10.0 + time)),
          sin(vUv.x * vUv.y * 10.0 + time)
        );
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 newPosition = position;
        newPosition.z += sin(position.x * 10.0 + time) * 0.1; // Adjust distortion here
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  return material;
};

const useFractalTerrainMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv;
        p *= 5.0; // Adjust scale
        float color = 0.0;
        float amplitude = 1.0;
        for (int i = 0; i < 5; i++) {
          color += amplitude * (sin(p.x + time) + sin(p.y + time));
          p *= 2.0; // Adjust complexity
          amplitude *= 0.5; // Adjust amplitude
        }
        gl_FragColor = vec4(vec3(color), 1.0);
      }
    `,
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 newPosition = position;
        newPosition.z += sin(position.x * 10.0 + time) * 0.1; // Adjust distortion here
        newPosition.z += sin(position.y * 10.0 + time) * 0.1; // Adjust distortion here
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  return material;
};

const useParticleSystemMaterial = () => {
  const material = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        float size = abs(sin(time) * 0.01); // Adjust particle size
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    `,
    transparent: true,
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 newPosition = position;
        newPosition.x += sin(time * 5.0) * 0.01; // Adjust particle motion
        newPosition.y += cos(time * 5.0) * 0.01; // Adjust particle motion
        gl_PointSize = 10.0; // Adjust particle size
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
  });

  return material;
};

const useVolumetricCloudMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv * 5.0;
        float cloud = abs(sin(p.x * 500.0 + time * 10.1)) +
                      abs(cos(p.y * 500.0 + time * 10.1));
        gl_FragColor = vec4(vec3(cloud), 1.0);
      }
    `,
    uniforms: {
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
  });

  return material;
};

const useMorphingLiquidMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        uv.y += sin(uv.x * 10.0 + time) * 0.01;
        float color = abs(sin(uv.x * 1000.0 + time)) +
                      abs(cos(uv.y * 10.0 + time));
        gl_FragColor = vec4(vec3(color), 1.0);
      }
    `,
    uniforms: {
      time: { value: 10.0 },
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

const useLaserBeamMaterial = () => {
  const material = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 color = vec3(
          abs(sin(vUv.x * 100.0 + time)),
          abs(cos(vUv.y * 100.0 + time)),
          sin(vUv.x * vUv.y * 100.0 + time)
        );
        gl_FragColor = vec4(color, 0.8);
      }
    `,
    transparent: true,
    uniforms: {
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
  });

  return material;
};

const useElectricArcMaterial = () => {
  const material = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 color = vec3(
          abs(sin(vUv.x * 1000.0 + time)),
          abs(cos(vUv.y * 1000.0 + time)),
          sin(vUv.x * vUv.y * 10.0 + time)
        );
        gl_FragColor = vec4(color, 1.8);
      }
    `,
    transparent: true,
    uniforms: {
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
  });

  return material;
};

const useStarfieldMaterial = () => {
  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        float stars = step(fract(vUv.x * vUv.y * 1000.0 + time), 0.1);
        gl_FragColor = vec4(vec3(stars), 1.0);
      }
    `,
    uniforms: {
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
  });

  return material;
};

const useNebulaStarfieldMaterial = () => {
  const material = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec3 starColor = vec3(
          abs(sin(vUv.x * 1000.0 + time)),
          abs(cos(vUv.y * 100.0 + time)),
          sin(vUv.x * vUv.y * 100.0 + time)
        );
        vec3 nebulaColor = vec3(
          abs(sin(vUv.x * 5.0 + time)),
          abs(cos(vUv.y * 5.0 + time)),
          sin(vUv.x * vUv.y * 5.0 + time)
        );
        gl_FragColor = vec4(starColor + nebulaColor, 0.8);
      }
    `,
    transparent: true,
    uniforms: {
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
  });

  return material;
};

const usePulsarStarfieldMaterial = () => {
  const material = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    fragmentShader: `
      uniform float time;
      uniform float pulsarFrequency;
      varying vec2 vUv;
      void main() {
        float pulsarIntensity = abs(sin(time * pulsarFrequency));
        vec3 color = vec3(
          abs(sin(vUv.x * 10.0 + time)),
          abs(cos(vUv.y * 10.0 + time)),
          sin(vUv.x * vUv.y * 10.0 + time)
        );
        gl_FragColor = vec4(color * pulsarIntensity, pulsarIntensity);
      }
    `,
    transparent: true,
    uniforms: {
      pulsarFrequency: { value: 1.0 },
      time: { value: 0.0 }, // Adjust pulsar frequency
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

const NoiseSphere = React.forwardRef<THREE.Mesh, NoiseSphereProps>(
  (props, forwardedRef) => {
    const material = useStarfieldMaterial();

    return (
      <Sphere material={material} ref={forwardedRef} {...props} />
    );
  },
);

type NoiseTextProps = React.PropsWithChildren;

const NoiseText = React.forwardRef<THREE.Mesh, NoiseTextProps>(
  (props, forwardedRef) => {
    const material = useStarfieldMaterial();

    // @ts-expect-error WIP
    return <Text material={material} ref={forwardedRef} {...props} />;
  },
);

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen">
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
