import React from 'react';

// Libs
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
    camera={{ position: [0, 0, 3] }}
    className={css(styles.canvas)}
    colorManagement
    gl={{
      alpha: false,
      antialias: true,
      depth: false,
      powerPreference: 'high-performance',
      stencil: false,
    }}
  >
    {children}
  </FiberCanvas>
);

export default Canvas;
