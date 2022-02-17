import * as React from "react";
import styled from "styled-components";
import Switch from "react-ios-switch";

// Store
import useStore from "./@store";

const Label = styled.div`
  flex: 1;
  font-size: 12px;
  padding-right: 10px;
  text-align: right;
  width: 100%;
`;

const Root = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  position: absolute;
  right: 60px;
  top: 60px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSwitch = styled(Switch)`
  transform: scale(0.8);
`;

const Controls: React.FC = () => {
  const { animation, handleAnimation } = useStore();

  return (
    <Root>
      <Row>
        <Label>Animation</Label>
        <StyledSwitch
          checked={animation}
          onChange={handleAnimation}
          onColor="#000"
        />
      </Row>
    </Root>
  );
};

export default Controls;
