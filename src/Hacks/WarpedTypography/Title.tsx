import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

// Local
import Letter from './TitleLetter';

const StyledCanvas = styled(FiberCanvas)``;

const Root = styled.div`
  background-color: #ccff00;
  display: inline-block;
  height: 50vw;
  width: 100vw;
`;

const List: React.FC = () => {
  const alphabet = React.useMemo(
    () => [
      [
        'upper-w',
        'upper-a',
        'upper-r',
        'upper-p',
        'upper-e',
        'upper-d',
        'space',
        'upper-h',
        'upper-e',
        'upper-l',
        'upper-v',
        'upper-e',
        'upper-t',
        'upper-i',
        'upper-c',
        'upper-a',
      ],
      [
        'upper-t',
        'upper-h',
        'upper-e',
        'space',
        'upper-q',
        'upper-u',
        'upper-i',
        'upper-c',
        'upper-k',
        'space',
        'upper-b',
        'upper-r',
        'upper-o',
        'upper-w',
        'upper-n',
        'space',
        'upper-f',
        'upper-o',
        'upper-x',
      ],
      // ['upper-q', 'upper-u', 'upper-i', 'upper-c', 'upper-k'],
      // ['upper-b', 'upper-r', 'upper-o', 'upper-w', 'upper-n'],
      // ['upper-f', 'upper-o', 'upper-x'],
      [
        'upper-j',
        'upper-u',
        'upper-m',
        'upper-p',
        'upper-s',
        'space',
        'upper-t',
        'upper-h',
        'upper-r',
        'space',
        'upper-l',
        'upper-a',
        'upper-z',
        'upper-y',
        'space',
        'upper-d',
        'upper-o',
        'upper-g',
      ],
      // ['upper-t', 'upper-h', 'upper-r'],
      // ['upper-l', 'upper-a', 'upper-z', 'upper-y'],
      // ['upper-d', 'upper-o', 'upper-g'],
    ],
    [],
  );

  const renderLetter = React.useCallback(
    (letters) =>
      letters.map((letter, index) => (
        <group
          key={letter}
          position={[1.1 * index, 0, 0]}
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
        <group key={index} position={[-10, -2.5 * (index - 3), 0]}>
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
        <group position={[0, -2.2, -3.5]}>
          <List />
        </group>
      </React.Suspense>
    </StyledCanvas>
  </Root>
);

export default WarpedTypographyTitle;
