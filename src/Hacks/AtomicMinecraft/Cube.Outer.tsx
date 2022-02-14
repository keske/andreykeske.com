/* eslint max-lines: 0 */
/* eslint no-plusplus: 0 */

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

const Scene: React.FC = () => {
  const ref = React.useRef<
    HTMLDivElement & {
      geometry: THREE.BoxGeometry;
    }
  >();

  const radius = React.useMemo(() => 0.7, []);

  const rHalf = radius / 2;

  const particleCount = 5;

  const maxParticleCount = 1000;

  const segments = maxParticleCount * maxParticleCount;

  const positions = new Float32Array(segments * 3);

  const colors = new Float32Array(segments * 3);

  const particlesData = [];

  const particlePositions = new Float32Array(maxParticleCount * 3);

  /**
   * Render outer cube
   */
  const cube = React.useMemo(() => {
    const cubeGeometry = new THREE.BoxGeometry(radius, radius, radius);

    const cubeMaterial = new THREE.MeshLambertMaterial({
      blending: THREE.AdditiveBlending,
      color: 0x101010,
      transparent: true,
    });

    return new THREE.Mesh(cubeGeometry, cubeMaterial);
  }, [radius]);

  /**
   * Render point cloud
   */
  const cloud = React.useMemo(() => {
    const pMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      size: 1,
      sizeAttenuation: false,
      transparent: true,
    });

    const particles = new THREE.BufferGeometry();

    for (let i = 0; i < maxParticleCount; i++) {
      const x = Math.random() * radius - radius / 2;

      const y = Math.random() * radius - radius / 2;

      const z = Math.random() * radius - radius / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
    }

    particles.setDrawRange(0, particleCount);
    particles
      .setAttribute('position', new THREE.BufferAttribute(particlePositions, 3)
        .setUsage(THREE.DynamicDrawUsage));

    return new THREE.Points(particles, pMaterial);
  }, [particlePositions, particlesData, radius]);

  useFrame(() => {
    const vertexpos = 0;

    const colorpos = 0;

    const numConnected = 0;

    particlePositions.forEach((value, i) => {
      const x = Math.random() * radius - radius / 2;

      const y = Math.random() * radius - radius / 2;

      const z = Math.random() * radius - radius / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
    });

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <ambientLight intensity={0.2} />

      <spotLight
        angle={Math.PI / 6}
        castShadow
        intensity={0.1}
        position={[20, 20, 30]}
        shadow-bias={-0.00005}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />

      <primitive object={cube} />
      <primitive ref={ref} object={cloud} />
    </group>
  );
};

export default Scene;
