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
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  wrapper: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
  },
});

const ResponsiveFrame: React.FC<Props> = ({
  src,
  title,
}: Props): JSX.Element => {
  return (
    <div className={css(styles.wrapper)}>
      <iframe
        allowFullScreen
        className={css(styles.root)}
        frameBorder="0"
        src={src}
        title={title}
      />
    </div>
  );
};

export default ResponsiveFrame;
