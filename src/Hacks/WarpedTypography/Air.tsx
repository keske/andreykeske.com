import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

import { mediaQuery } from '../../utils';

// Local
import Letter from './AirLetter';

const { PUBLIC_URL } = process.env;

const Image = styled.img`
  position: absolute;
  transform: translate(0, -50vw);
  width: 50vw;

  ${mediaQuery(
    'phone',
    css`
      transform: translate(0, -100vw);
      width: 100vw;
    `,
  )}
`;

const Root = styled.div`
  background-color: #fff;
  display: inline-block;
  height: 50vw;
  overflow: hidden;
  width: 50vw;

  ${mediaQuery(
    'phone',
    css`
      height: 100vw;
      width: 100vw;
    `,
  )}
`;

const StyledCanvas = styled(FiberCanvas)`
  position: absolute;
  z-index: 2;
`;

const List: React.FC = () => {
  const alphabet = React.useMemo(
    () => [
      ['quote-left', 'upper-a', 'upper-i', 'upper-r', 'quote-right'],
    ],
    [],
  );

  const renderLetter = React.useCallback(
    (letters) =>
      letters.map((letter, index) => (
        <group
          key={letter}
          position={[0.9 * index, 0, 0]}
          scale={[0.3, 0.3, 0.3]}
        >
          <Letter url={`static/helvetica/${letter}.png`} />
        </group>
      )),
    [],
  );

  const renderAlphabet = React.useMemo(
    () =>
      alphabet.map((letters, index) => (
        <group key={index} position={[0, 0, 0]}>
          {renderLetter(letters)}
        </group>
      )),
    [alphabet, renderLetter],
  );

  return <>{renderAlphabet}</>;
};

const WarpedTypographyTitle: React.FC = () => (
  <Root>
    {/* <RatioInput /> */}
    <StyledCanvas>
      <React.Suspense fallback={null}>
        <group position={[2, -2.9, -6.5]}>
          <List />
        </group>
      </React.Suspense>
    </StyledCanvas>
    <Image alt="Air Force 1" src={`${PUBLIC_URL}/static/af.jpeg`} />
  </Root>
);

export default WarpedTypographyTitle;
