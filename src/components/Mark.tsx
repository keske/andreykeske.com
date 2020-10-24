import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  color?: string;
};

const DEFAULT_COLOR = 'yellow';

const styles = ({ color }: Pick<Props, 'color'>) => ({
  root: {
    backgroundColor: color,
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  } as const,
});

const Mark: React.FC<Props> = ({
  children,
  color = DEFAULT_COLOR,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ color }));

  return <span className={css(cx.root)}>{children}</span>;
};

export default Mark;
