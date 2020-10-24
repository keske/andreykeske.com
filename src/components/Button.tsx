import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  color?: string;
};

const DEFAULT_COLOR = 'black';

const styles = ({ color }: Pick<Props, 'color'>) => ({
  root: {
    ':hover': {
      opacity: 0.7,
    },
    border: `1px solid ${color}`,
    borderRadius: 7,
    color,
    display: 'inline-block',
    fontSize: '1rem',
    marginTop: 10,
    padding: 13,
  } as const,
});

const Button: React.FC<Props> = ({
  children,
  color = DEFAULT_COLOR,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ color }));

  return <span className={css(cx.root)}>{children}</span>;
};

export default Button;
