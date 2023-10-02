import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export type AtomicSurfaceProps = {
  /**
   * Animate or not particles
   */
  animation?: boolean;

  /**
   * Color of the cube
   */
  color?: THREE.Color | number | string;

  /**
   * Amount of particles in the cube
   */
  density?: number;

  /**
   * Radius of the cube
   */
  radius?: number;
};

export const AtomicSurface: React.FC<AtomicSurfaceProps> = ({
  animation = true,
  color = "rgba(255,255,255,0.1)",
  density = 3000,
  radius = 100,
}) => {
  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const particlePositions = React.useMemo(
    () => new Float32Array(density),
    [density],
  );

  const setPosition = React.useCallback(() => {
    const min = -radius / 2;

    [...Array(density)].forEach((_, i) => {
      particlePositions[i] = Math.random() * radius + min;
    });
  }, [density, particlePositions, radius]);

  const cloud = React.useMemo(() => {
    const pMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color,
      size: 1,
      sizeAttenuation: false,
      transparent: true,
    });

    const particles = new THREE.BufferGeometry();

    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3).setUsage(
        THREE.DynamicDrawUsage,
      ),
    );

    return new THREE.Points(particles, pMaterial);
  }, [color, particlePositions]);

  useFrame(() => {
    setPosition();

    if (ref.current) {
      ref.current.geometry.attributes.position.needsUpdate =
        animation;
    }
  });

  return <primitive object={cloud} ref={ref} />;
};
