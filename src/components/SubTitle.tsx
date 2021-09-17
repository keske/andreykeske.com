import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const DESKTOP_FONT_SIZE = 1.7;

const MOBILE_FONT_SIZE = 1.1;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
});

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    color: invert ? 'white' : 'black',
    fontSize: '1.9rem',
    fontWeight: 800,
    letterSpacing: '0.09rem',
    marginTop: 40,
  } as const,
});

const SubTitle: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <h3 className={css(cx.root)}>{children}</h3>;
};

export default SubTitle;
