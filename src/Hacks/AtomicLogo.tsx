import * as React from "react";

// Libs
import styled from "styled-components";

// Components
import { ProjectWrapper, Spacer } from "../components";

import AtomicPhotos from "./AtomicPhotos/Root";

const { PUBLIC_URL } = process.env;

const ActiveYears = styled.p`
  font-size: 12px;
  text-align: center;
`;

const AtomicPhotosWrapper = styled.div`
  background-color: #000;
  border-radius: 30px;
  height: 50vh;
  margin-left: 5vw;
  width: 90vw;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  text-align: center;
`;

const AtomicLogo: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <AtomicPhotosWrapper>
      <AtomicPhotos
        height={85}
        showControls={false}
        src={`${PUBLIC_URL}/static/about/logo.jpg`}
        width={85}
      />
      <Spacer size={10} />
      <ActiveYears>
        Selected works
        <Spacer size={0} />
        2006&mdash;2022
      </ActiveYears>
    </AtomicPhotosWrapper>
  </StyledProjectWrapper>
);

export default AtomicLogo;
