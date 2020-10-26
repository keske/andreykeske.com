import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  color?: string;
  invert?: boolean;
};

const DEFAULT_COLOR = 'yellow';

const styles = ({
  color,
  invert,
}: Pick<Props, 'color' | 'invert'>) => ({
  root: {
    backgroundColor: color,
    borderRadius: 5,
    color: invert ? 'white' : 'black',
    fontWeight: 'bold',
    padding: 5,
  } as const,
});

const Mark: React.FC<Props> = ({
  children,
  color = DEFAULT_COLOR,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ color, invert }));

  return <span className={css(cx.root)}>{children}</span>;
};

export default Mark;
