import * as React from 'react';
import styled, { css } from 'styled-components';

import { OnScreen, ProjectWrapper, Title } from '../components';
import { mediaQuery } from '../utils';

import Mirrors from '../Hacks/DistortingMirrors/Root';

export const ReloadButton = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 100%;
  bottom: 30px;
  color: #000;
  font-size: 32px;
  padding: 5px 14px;
  position: absolute;
  right: 30px;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  padding: 0;
  position: fixed;
`;

const StyledTitle = styled(Title)`
  color: #000;
  font-size: 44px;
  left: 30px;
  position: absolute;
  top: 30px;

  ${mediaQuery(
    'phone',
    css`
      font-size: 44px;
    `,
  )}
`;

const DistortingMirrors: React.FC = (): JSX.Element => {
  const [isRendering, showIsRendering] = React.useState(true);

  const generate = React.useCallback(() => {
    showIsRendering(false);

    setTimeout(() => {
      showIsRendering(true);
    }, 100);
  }, []);

  return (
    <StyledProjectWrapper>
      <OnScreen>{isRendering && <Mirrors />}</OnScreen>

      <StyledTitle>☺︎ 球面鏡 ☹︎</StyledTitle>

      <ReloadButton onClick={generate}>↻</ReloadButton>
    </StyledProjectWrapper>
  );
};

export default DistortingMirrors;
