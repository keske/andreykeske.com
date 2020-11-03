import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const DESKTOP_FONT_SIZE = 2.3;
const MOBILE_FONT_SIZE = 1.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  letterSpacing: `${fontSize / 20}rem`,
});

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
      marginBottom: 10,
      marginTop: 20,
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    color: invert ? 'white' : 'black',
    fontWeight: 600,
    marginBottom: 20,
    marginTop: 40,
    textTransform: 'uppercase',
  } as const,
});

const Title: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <h2 className={css(cx.root)}>{children}</h2>;
};

export default Title;
