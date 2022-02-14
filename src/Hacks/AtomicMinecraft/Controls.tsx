import * as React from "react";
import styled from "styled-components";
import Switch from "react-ios-switch";

// Store
import useStore from "./@store";

const Label = styled.div`
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  padding-right: 10px;
  text-align: right;
  width: 100%;
`;

const Root = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
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
  const { handleShowAir, handleShowLines, showAir, showLines } = useStore();

  return (
    <Root>
      <Row>
        <Label>Air</Label>
        <StyledSwitch
          checked={showAir}
          onChange={handleShowAir}
          onColor="#000"
        />
      </Row>
      <Row>
        <Label>Outlines</Label>
        <StyledSwitch
          checked={showLines}
          onChange={handleShowLines}
          onColor="#000"
        />
      </Row>
    </Root>
  );
};

export default Controls;
