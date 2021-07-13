import React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Canvas as FiberCanvas } from 'react-three-fiber';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: '#f6ec36',
    height: '50vh',
    marginLeft: '10%',
    width: '80%',
  },
  root: {
    backgroundColor: '#f6ec36',
    height: '50vh',
    width: '100%',
  },
});

const Canvas: React.FC<Props> = ({ children }: Props) => (
  <div className={css(styles.root)}>
    <FiberCanvas
      camera={{ position: [0, 0, 1.2] }}
      className={css(styles.canvas)}
      colorManagement
      gl={{
        alpha: true,
        antialias: true,
        depth: false,
        powerPreference: 'high-performance',
        stencil: false,
      }}
    >
      {children}
    </FiberCanvas>
  </div>
);

export default Canvas;
