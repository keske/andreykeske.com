/* eslint import/extensions: 0 */
/* eslint react/jsx-props-no-spreading: 0 */
/* eslint max-len: 0 */
/* eslint max-lines: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
/* eslint no-multi-assign: 0 */

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type Props = {
  material: React.MutableRefObject<any>;
};

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>;

  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

const Model: React.FC<Props> = ({ material }: Props) => {
  const ref = React.useRef<
    HTMLDivElement & {
      rotation;
      factor;
    }
  >();

  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF('/lego-2.gltf') as GLTFResult;

  return (
    <group ref={group} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Cube128.geometry}
        material={material.current}
      >
        <meshStandardMaterial
          color="red"
          metalness={3}
          roughness={3}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/lego-2.gltf');

export default Model;