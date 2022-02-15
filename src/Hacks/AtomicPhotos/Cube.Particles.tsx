import * as React from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

// Store
import useStore from "./@store";

import type { Cube as CubeProps } from "./@types";

type Props = Pick<CubeProps, "color" | "density" | "radius">;

const CubeParticles: React.FC<Props> = ({ color, density, radius }: Props) => {
  const { animation } = useStore();

  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const particlePositions = React.useMemo(
    () => new Float32Array(density * 3),
    [density]
  );

  const material = React.useMemo(
    () =>
      new THREE.PointsMaterial({
        blending: THREE.AdditiveBlending,
        color,
        size: 2,
        sizeAttenuation: false,
        transparent: true,
      }),
    [color]
  );

  const setPosition = React.useCallback(() => {
    const particles = new THREE.BufferGeometry();

    [...Array(density)].forEach((_, i) => {
      const x = Math.random() * radius - radius / 2;

      const y = Math.random() * radius - radius / 2;

      const z = Math.random() * radius - radius / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
    });

    return new THREE.Points(particles, material);
  }, [density, material, particlePositions, radius]);

  const cloud = React.useMemo(() => {
    const pMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      size: 2,
      sizeAttenuation: false,
      transparent: true,
    });

    const particles = new THREE.BufferGeometry();

    setPosition();

    particles.setDrawRange(0, density);
    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );

    return new THREE.Points(particles, pMaterial);
  }, [density, particlePositions, setPosition]);

  useFrame(() => {
    setPosition();

    ref.current.geometry.attributes.position.needsUpdate = animation;
  });

  return <primitive ref={ref} object={cloud} />;
};

export default CubeParticles;
