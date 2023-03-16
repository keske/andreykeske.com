import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export type MinecraftAtomicCubeProps = {
  /**
   * Color of the cube
   */
  color: THREE.Color | number | string;

  /**
   * Amount of particles in the cube
   */
  density: number;

  /**
   * Radius of the cube
   */
  radius: number;

  /**
   * Optional, show the outer cube
   */
  showLines: boolean;
};

export const MinecraftAtomicCube: React.FC<MinecraftAtomicCubeProps> = ({
  color,
  density,
  radius,
  showLines,
}) => {
  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const particlePositions = React.useMemo(
    () => new Float32Array(density * 3),
    [density],
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
    [color],
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
      color,
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
        THREE.DynamicDrawUsage,
      ),
    );

    return new THREE.Points(particles, pMaterial);
  }, [color, density, particlePositions, setPosition]);

  useFrame(() => {
    setPosition();

    if (ref.current) {
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const outer = React.useMemo(() => {
    const cubeGeometry = new THREE.BoxGeometry(radius, radius, radius);

    const cubeMaterial = new THREE.MeshLambertMaterial({
      blending: THREE.AdditiveBlending,
      color: 0x101010,
      transparent: true,
    });

    const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

    return showLines ? new THREE.BoxHelper(mesh, color) : mesh;
  }, [color, radius, showLines]);

  return (
    <group>
      <primitive object={outer} />
      <primitive object={cloud} ref={ref} />
    </group>
  );
};
