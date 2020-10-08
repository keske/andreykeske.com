import React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

interface Props {
  label?: string;
};

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
});

const Header: React.FC<Props> = ({
  label = 'Site',
}: Props): JSX.Element => (
  <header>
    <p className={css(styles.red)}>{label}</p>
  </header>
);

export default Header;
