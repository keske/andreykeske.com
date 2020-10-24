import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  src: string;
  title: string;
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
  },
  wrapper: {
    height: 500,
    overflow: 'hidden',
    paddingTop: 0,
    position: 'relative',
  },
});

const ResponsiveFrame: React.FC<Props> = ({
  src,
  title,
}: Props): JSX.Element => {
  return (
    <iframe
      allowFullScreen
      className={css(styles.root)}
      frameBorder="0"
      src={src}
      title={title}
    />
  );
};

export default ResponsiveFrame;
