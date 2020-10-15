import React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: string;
};

const styles = StyleSheet.create({
  root: {
    color: 'red',
  },
});

const Title: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <h3 className={css(styles.root)}>{children}</h3>
);

export default Title;
