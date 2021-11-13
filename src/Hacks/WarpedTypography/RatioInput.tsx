import React from 'react';

// Libs
import styled, { keyframes } from 'styled-components';

// Store
import useStore from './store';

const bounce = keyframes`
  from {
    transform: translateX(3px);
  }
  to {
    transform: translateX(10px);
  }
`;

const Label = styled.span<{ isShowing: boolean }>`
  animation-direction: alternate;
  animation-duration: 1100ms;
  animation-iteration-count: infinite;
  animation-name: ${bounce};
  color: #000;
  display: inline-block;
  font-size: 10px;
  font-weight: normal;
  opacity: ${(props) => (props.isShowing ? 1 : 0)};
`;

const Root = styled.div`
  display: inline-block;
  transform: translateY(-35px) translateX(10px);
`;

const StyledInput = styled.input.attrs({
  step: 0.1,
  type: 'number',
})`
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  padding: 10px 10px 10px 10px;
  width: 80px;
  z-index: 1;
`;

const WarpedMinecraftRatioInput: React.FC = () => {
  const { setWarpRatio, warpRatio } = useStore();

  const [localWarpRatio] = React.useState(warpRatio);

  const [isShowing, setIsShowing] = React.useState(true);

  React.useEffect(() => {
    if (localWarpRatio !== warpRatio && isShowing) {
      setIsShowing(false);
    }
  }, [isShowing, localWarpRatio, warpRatio]);

  return (
    <Root>
      <StyledInput
        defaultValue={warpRatio}
        onChange={(event) => {
          setWarpRatio(+event.target.value);
        }}
      />
      <Label isShowing={isShowing}>← Change the warp ratio</Label>
    </Root>
  );
};

export default WarpedMinecraftRatioInput;
