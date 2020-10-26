import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

// Components
import UploadcareImage from './UploadcareImage';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    right: 30,
    top: 30,
    width: 73,
  },
});

const Me: React.FC = (): JSX.Element => (
  <div className={css(styles.root)}>
    <UploadcareImage src="https://ucarecdn.com/18251169-c22c-46f4-9add-a1b3670cf257/" />
  </div>
);

export default Me;
