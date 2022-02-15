import * as React from "react";
import styled from "styled-components";

import { Title } from "../../components";

const Root = styled.div`
  left: 60px;
  position: absolute;
  top: 0px;
`;

const StyledTitle = styled(Title)`
  color: #fff;
  font-size: 64px;
`;

const Controls: React.FC = () => (
  <Root>
    <StyledTitle>
      Atomic
      <br />
      Minecraft
    </StyledTitle>
  </Root>
);

export default Controls;
