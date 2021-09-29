import React from 'react';

// Libs
import styled from 'styled-components';

// Store
import useStore from './store';

const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
  left: 15px;
  letter-spacing: 2px;
  position: absolute;
  text-transform: uppercase;
  top: 12px;
  z-index: 3;
`;

const Root = styled.div`
  left: 30px;
  position: absolute;
  top: 30px;
`;

const StyledInput = styled.input.attrs({
  step: 0.1,
  type: 'number',
})`
  background-color: #fff;
  border: none;
  border-radius: 30px;
  outline: none;
  padding: 10px 20px 10px 70px;
  width: 130px;
  z-index: 1;
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
