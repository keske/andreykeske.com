import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const DESKTOP_FONT_SIZE = 1.1;
const MOBILE_FONT_SIZE = 0.8;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  lineHeight: `${fontSize * 1.7}rem`,
});

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    color: invert ? 'white' : 'black',
  },
});

const Text: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <p className={css(cx.root)}>{children}</p>;
};

export default Text;
