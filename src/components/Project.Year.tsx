import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
};

const COLOR = 'gray';

const styles = StyleSheet.create({
  root: {
    border: `1px solid ${COLOR}`,
    borderRadius: 7,
    color: COLOR,
    display: 'inline-block',
    fontSize: '0.7rem',
    marginTop: 17,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
  } as const,
});

const Button: React.FC<Props> = ({
  children,
}: Props): JSX.Element => <span className={css(styles.root)}>{children}</span>;

export default Button;
