import React from 'react';

// Libs
import styled from 'styled-components';

// Store
import useStore from './store';

const Root = styled.div`
  display: inline-block;
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
  transform: translateY(-35px) translateX(10px);
`;

const WarpedMinecraftRatioInput: React.FC = () => {
  const { setWarpRatio, warpRatio } = useStore();

  return (
    <Root>
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
