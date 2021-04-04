import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

// Local
import Anchor from './Anchor';

type Props = {
  children: string;
  invert?: boolean;
};

const DESKTOP_FONT_SIZE = 2.5;
const MOBILE_FONT_SIZE = 1.7;

const getTypographySettings = (
  fontSize: number,
): Record<string, string> => ({
  fontSize: `${fontSize}rem`,
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
    fontWeight: 800,
    letterSpacing: `-.025rem`,
    marginBottom: 20,
    marginTop: 40,
  } as const,
});

const Title: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  const getLink = () => children.replace(' ', '-').toLowerCase();

  return (
    <>
      <Anchor link={getLink()} />
      <h2 className={css(cx.root)} id={getLink()}>
        {children}
      </h2>
    </>
  );
};

export default Title;
