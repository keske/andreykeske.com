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
    fontSize: '2.3rem',
    fontWeight: 600,
    letterSpacing: '0.0`rem',
    marginTop: 40,
    textTransform: 'uppercase',
  } as const,
});

const ProjectTitle: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <h3 className={css(cx.root)}>{children}</h3>;
};

export default ProjectTitle;
