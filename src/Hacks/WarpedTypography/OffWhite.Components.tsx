import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Canvas as FiberCanvas } from 'react-three-fiber';

import { mediaQuery } from '../../utils';

import Letter from './OffWhite.Letter';

const { PUBLIC_URL } = process.env;

export const AnimateButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  bottom: 50px;
  color: #000;
  font-size: 10px;
  padding: 5px 8px;
  position: absolute;
  right: 50px;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }

  ${mediaQuery(
    'phone',
    css`
      display: none;
    `,
  )}
`;

export const Image = styled.img`
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

export const Root = styled.div`
  background-color: #fff;
  display: inline-block;
  height: 50vw;
  overflow: hidden;
  position: relative;
  width: 50vw;

  ${mediaQuery(
    'phone',
    css`
      height: 100vw;
      width: 100vw;
    `,
  )}
`;

export const StyledCanvas = styled(FiberCanvas)`
  position: absolute;
  z-index: 2;
`;

type ListProps = {
  alphabet: string[][];
  warpRatio: number;
};

export const List: React.FC<ListProps> = ({
  alphabet,
  warpRatio,
}: ListProps) => {
  const renderLetter = React.useCallback(
    (letters) =>
      letters.map((letter, index) => (
        <group
          key={letter}
          position={[0.9 * index, 0, 0]}
          scale={[0.3, 0.3, 0.3]}
        >
          <Letter
            url={`static/helvetica/${letter}.png`}
            warpRatio={warpRatio}
          />
        </group>
      )),
    [warpRatio],
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

type Props = {
  children: React.ReactNode;
};

export const OffWhiteCase: React.FC<Props> = ({
  children,
}: Props) => {
  const [isRendering, showIsRendering] = React.useState(true);

  const generate = React.useCallback(() => {
    showIsRendering(false);

    setTimeout(() => {
      showIsRendering(true);
    }, 100);
  }, []);

  return (
    <Root>
      <StyledCanvas>
        <React.Suspense fallback={null}>
          {isRendering && children}
        </React.Suspense>
      </StyledCanvas>
      <Image alt="Air Force 1" src={`${PUBLIC_URL}/static/af.jpeg`} />
      <AnimateButton onClick={generate}>↻</AnimateButton>
    </Root>
  );
};
