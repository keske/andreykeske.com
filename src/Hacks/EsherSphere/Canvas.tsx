import React from 'react';

// Libs
import * as THREE from 'three';
import { StyleSheet, css } from 'aphrodite';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  canvas: {
    height: '100vh',
    width: '100%',
  },
});

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <FiberCanvas
    camera={{ fov: 75, position: new THREE.Vector3(-5, 5, 5) }}
    className={css(styles.canvas)}
    colorManagement
    pixelRatio={window.devicePixelRatio}
    shadowMap
  >
    {children}
  </FiberCanvas>
);

export default Canvas;
