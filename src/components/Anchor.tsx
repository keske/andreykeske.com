import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  link: string;
};

const styles = StyleSheet.create({
  root: {
    ':hover': {
      opacity: 1,
    },
    '@media screen and (max-width: 414px)': {
      display: 'none',
    },
    color: '#000',
    fontSize: 20,
    fontWeight: 200,
    marginLeft: -30,
    marginTop: 40,
    opacity: 0.2,
    position: 'absolute',
  },
});

const Anchor: React.FC<Props> = ({ link }: Props): JSX.Element => (
  <a className={css(styles.root)} href={`#${link}`}>
    §
  </a>
);

export default Anchor;
