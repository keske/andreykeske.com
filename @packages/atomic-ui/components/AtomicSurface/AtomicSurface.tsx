import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import { random } from "@/utils";

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
  color = "#FFF",
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
    [...Array(density)].forEach((_, i) => {
      particlePositions[i] = random(-radius, radius);
    });
  }, [density, particlePositions, radius]);

  const cloud = React.useMemo(() => {
    const material = new THREE.PointsMaterial({
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

    return new THREE.Points(particles, material);
  }, [color, particlePositions]);

  useFrame(() => {
    setPosition();

    // if (ref.current) {
    //   ref.current.geometry.attributes.position.needsUpdate =
    //     animation;
    // }
  });

  return <primitive object={cloud} ref={ref} />;
};
