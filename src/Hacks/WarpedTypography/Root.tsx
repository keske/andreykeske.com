import * as React from 'react';

// Libs
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas as FiberCanvas } from 'react-three-fiber';
// Local
// import Canvas from './Canvas';
import Letter from './Letter';
// import RatioInput from './RatioInput';
import Scene from './Scene';

const Root = styled.div`
  background-color: #3cec43;
  cursor: grab;
  display: inline-block;
  /* height: calc(100vw / 5); */
  height: 100vh;
  /* width: calc(100vw / 5); */
  width: 100vw;
`;

const List: React.FC = () => {
  const alphabet = React.useMemo(
    () => [
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
      'upper-y',
      'lower-y',
      'upper-z',
      'lower-z',
    ],
    [],
  );

  const renderLetter = React.useCallback(
    (letter) => (
      <group key={letter} scale={[1, 1, 1]}>
        <Letter url={`static/helvetica/${letter}.png`} />
      </group>
    ),
    [],
  );

  // const renderAlphabet = React.useMemo(
  //   () => alphabet.map((letter) => renderLetter(letter)),
  //   [alphabet, renderLetter],
  // );

  // return (
  //   <Flex flexDirection="row" removeFromParent>
  //     {renderAlphabet}
  //   </Flex>
  // );
};

const WarpedTypographyRoot: React.FC = () => (
  <FiberCanvas>
    <React.Suspense fallback={null} />
  </FiberCanvas>
);

export default WarpedTypographyRoot;
