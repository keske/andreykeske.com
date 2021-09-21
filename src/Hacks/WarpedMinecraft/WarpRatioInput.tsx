import React from 'react';

// Libs
import styled from 'styled-components';

// Store
import useStore from './store';

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Root = styled.div`
  background-color: #fff;
  border-radius: 33px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  left: 30px;
  padding: 13px 17px;
  position: absolute;
  top: 30px;
`;

const StyledInput = styled.input.attrs({
  step: 0.1,
  type: 'number',
})`
  background-color: #d8d8d8;
  border: none;
  border-radius: 30px;
  outline: none;
  padding: 10px 20px;
  margin-left: 20px;
  width: 100px;
`;

const WarpRatioInput: React.FC = () => {
  const { setWarpRatio, warpRatio } = useStore();

  return (
    <Root>
      <Label>Warp Ratio</Label>
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

export default WarpRatioInput;
