import * as React from "react";
import styled from "styled-components";
import Switch from "react-ios-switch";

// Components
import { Spacer } from "../../components";

// Store
import useStore from "./@store";

const Label = styled.div`
  color: #fff;
  flex: 1;
  font-size: 12px;
  padding-right: 5px;
  text-align: right;
  width: 100%;
`;

const Root = styled.div`
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 10px;
  position: fixed;
  right: 60px;
  top: 60px;
  z-index: 100;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  margin-right: 8px;
  width: 35px;
`;

const StyledSwitch = styled(Switch)`
  transform: scale(0.7);
`;

const Controls: React.FC = () => {
  const {
    animation,
    enableColor,
    enableZoom,
    handleAnimation,
    handleEnableColor,
    handleEnableZoom,
    handleHeight,
    handleShowAir,
    handleShowLines,
    handleWidth,
    height,
    showAir,
    showLines,
    width,
  } = useStore();

  return (
    <Root>
      <Row>
        <Label>Width</Label>
        <StyledInput
          defaultValue={width}
          onChange={(event) => {
            handleWidth(+event.target.value);
          }}
          type="text"
        />
      </Row>
      <Spacer size={1} />
      <Row>
        <Label>Height</Label>
        <StyledInput
          defaultValue={height}
          onChange={(event) => {
            handleHeight(+event.target.value);
          }}
          type="text"
        />
      </Row>
      <Spacer size={2} />
      <Row>
        <Label>Animation</Label>
        <StyledSwitch checked={animation} onChange={handleAnimation} />
      </Row>
      <Row>
        <Label>Air</Label>
        <StyledSwitch checked={showAir} onChange={handleShowAir} />
      </Row>
      <Row>
        <Label>Outlines</Label>
        <StyledSwitch checked={showLines} onChange={handleShowLines} />
      </Row>
      <Row>
        <Label>Scroll Zoom</Label>
        <StyledSwitch checked={enableZoom} onChange={handleEnableZoom} />
      </Row>
      <Row>
        <Label>Color</Label>
        <StyledSwitch checked={enableColor} onChange={handleEnableColor} />
      </Row>
    </Root>
  );
};

export default Controls;