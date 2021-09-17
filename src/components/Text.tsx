import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
  style?: React.CSSProperties;
};

const DESKTOP_FONT_SIZE = 1.1;

const MOBILE_FONT_SIZE = 0.8;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  lineHeight: `${fontSize * 1.7}rem`,
});

type StyleProps = Pick<Props, 'invert'> & {
  style: Record<string, any>;
};

const styles = ({ invert, style = {} }: StyleProps) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    color: invert ? 'white' : 'black',
    ...style,
  },
});

const Text: React.FC<Props> = ({
  children,
  invert = false,
  style = {},
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert, style }));

  return (
    <p className={css(cx.root)} style={style}>
      {children}
    </p>
  );
};

export default Text;
