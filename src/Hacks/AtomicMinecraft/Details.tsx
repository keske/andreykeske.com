/* eslint jsx-a11y/accessible-emoji: 0 */

import * as React from "react";
import styled from "styled-components";

const Root = styled.div`
  bottom: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
`;

const Details: React.FC = () => {
  const scrollTo = React.useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Root>
      <StyledButton onClick={scrollTo}>Details 👇</StyledButton>
    </Root>
  );
};

export default Details;
