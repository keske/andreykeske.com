import * as React from "react";
import styled, { css } from "styled-components";

// Components
import AtomicPhotos from "../Hacks/AtomicPhotos/Root";
import { mediaQuery } from "../utils";

const { PUBLIC_URL } = process.env;

const AtomicPhotosWrapper = styled.div`
  background-color: #000;
  height: 100vh;
  margin-left: 5vw;
  position: absolute;
  width: 70vw;

  ${mediaQuery(
    "phone",
    css`
      height: 60vh;
      position: relative;
      width: 100vw;
    `,
  )}
`;

const AboutLeftSide: React.FC = (): JSX.Element =>
  process.env.NODE_ENV === "production" && (
    <AtomicPhotosWrapper>
      <AtomicPhotos
        height={120}
        showControls={false}
        src={`${PUBLIC_URL}/static/atomic-photos/gradients.jpg`}
        width={120}
      />
    </AtomicPhotosWrapper>
  );

export default AboutLeftSide;
