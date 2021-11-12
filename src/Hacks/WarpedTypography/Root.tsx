import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

// Local
import Letter from './Letter';

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
        'upper-a',
        'lower-a',
        'upper-b',
        'lower-b',
        'upper-c',
        'lower-c',
        'upper-d',
        'lower-d',
        'upper-e',
        'lower-e',
        'upper-f',
        'lower-f',
      ],
      [
        'upper-g',
        'lower-g',
        'upper-h',
        'lower-h',
        'upper-i',
        'lower-i',
        'upper-j',
        'lower-j',
        'upper-k',
        'lower-k',
        'upper-l',
        'lower-l',
      ],
      [
        'upper-m',
        'lower-m',
        'upper-n',
        'lower-n',
        'upper-o',
        'lower-o',
        'upper-p',
        'lower-p',
        'upper-q',
        'lower-q',
        'upper-r',
        'lower-r',
      ],
      [
        'upper-s',
        'lower-s',
        'upper-t',
        'lower-t',
        'upper-u',
        'lower-u',
        'upper-v',
        'lower-v',
        'upper-w',
        'lower-w',
        'upper-x',
        'lower-x',
      ],
      ['upper-y', 'lower-y', 'upper-z', 'lower-z'],
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
        <group key={index} position={[-6, -1.1 * (index - 3), 0]}>
          {renderLetter(letters)}
        </group>
      )),
    [alphabet, renderLetter],
  );

  return <>{renderAlphabet}</>;
};

const WarpedTypographyRoot: React.FC = () => (
  <Root>
    {/* <RatioInput /> */}
    <FiberCanvas>
      <React.Suspense fallback={null}>
        <List />
      </React.Suspense>
    </FiberCanvas>
  </Root>
);

export default WarpedTypographyRoot;
