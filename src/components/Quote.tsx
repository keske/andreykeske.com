import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
  link?: string;
};

const DESKTOP_FONT_SIZE = 0.8;
const MOBILE_FONT_SIZE = 0.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
  lineHeight: `${fontSize * 1.5}rem`,
});

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      ...getTypographySettings(MOBILE_FONT_SIZE),
    },
    ...getTypographySettings(DESKTOP_FONT_SIZE),
    backgroundColor: 'lemonchiffon',
    borderRadius: 10,
    color: invert ? 'white' : 'black',
    padding: 20,
  },
});

const Quote: React.FC<Props> = ({
  children,
  invert = false,
  link,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return (
    <p className={css(cx.root)}>
      {children}
      {link && (
        <sup>
          <a href="https://en.wikipedia.org/wiki/Zeno's_paradoxes#Achilles_and_the_tortoise">
            Source
          </a>
        </sup>
      )}
    </p>
  );
};

export default Quote;
