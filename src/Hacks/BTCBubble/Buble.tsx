import * as React from 'react';

// Libs
import * as THREE from 'three';
import { Icosahedron } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

type Props = {
  material: React.MutableRefObject<any>;
};

const Buble: React.FC<Props> = ({ material }: Props) => {
  const ref = React.useRef<
  HTMLDivElement & {
    rotation;
  }
  >();

  useFrame(({ clock, mouse }) => {
    const node = ref.current;

    node.rotation.z = clock.getElapsedTime();

    node.rotation.y = THREE.MathUtils.lerp(
      node.rotation.y,
      mouse.x * Math.PI,
      0.01,
    );

    node.rotation.x = THREE.MathUtils.lerp(
      node.rotation.x,
      mouse.y * Math.PI,
      0.01,
    );
  });

  return (
    <Icosahedron
      ref={ref}
      args={[1, 12]}
      material={material.current}
      position={[0, 0, 0]}
    />
  );
};

export default Buble;
