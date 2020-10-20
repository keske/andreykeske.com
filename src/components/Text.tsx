import React from 'react';

// Libs
import { StyleSheet,

  css } from 'aphrodite';

type Props = {
  children: JSX.Element;
};

const styles = StyleSheet.create({
  root: { color: 'red' },
});

const x = 0;

const Text: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <p className={css(styles.root)}>{children}</p>
)

export default Text;











