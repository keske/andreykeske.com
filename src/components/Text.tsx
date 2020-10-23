import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    color: invert ? 'white' : 'black',
  },
});

const Text: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <p className={css(cx.root)}>{children}</p>;
};

export default Text;
