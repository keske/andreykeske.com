import React from 'react';

// Libs
import styled from 'styled-components';

// Store
import useStore from './store';

const Label = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  left: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 12px;
  z-index: 3;
`;

const Root = styled.div`
  backdrop-filter: blur(21px) invert(0.1);
  border-radius: 30px;
  padding: 10px 20px;
  position: absolute;
  top: 30px;
`;

const StyledInput = styled.input.attrs({
  step: 0.1,
  type: 'number',
})`
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 30px;
  outline: none;
  width: 50px;
  margin-left: 3px;
`;

const WarpedMinecraftRatioInput: React.FC = () => {
  const { setWarpRatio, warpRatio } = useStore();

  return (
    <Root>
      <Label>Ratio</Label>
      <StyledInput
        defaultValue={warpRatio}
        onChange={(event) => {
          console.log(event.target.value);
          setWarpRatio(+event.target.value);
        }}
      />
    </Root>
  );
};

export default WarpedMinecraftRatioInput;
