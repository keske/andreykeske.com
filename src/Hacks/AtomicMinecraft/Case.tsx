import * as React from "react";
import * as THREE from "three";

// Libs
import styled, { css } from "styled-components";
import { Canvas as FiberCanvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import { OnScreen } from "../../components";
import { mediaQuery } from "../../utils";

import AutoRotation from "../WarpedMinecraft/Case.AutoRotation";

type Props = {
  cameraPosition?: THREE.Vector3;
  children: React.ReactNode;
};

const AnimateButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 100%;
  bottom: 20px;
  padding: 3px 10px;
  position: absolute;
  right: 20px;
  z-index: 10;
`;

const Root = styled.div`
  border-radius: 30px;
  height: 50vh;
  overflow: hidden;
  position: relative;

  ${mediaQuery(
    "phone",
    css`
      height: 17vh;
    `
  )}

  ${mediaQuery(
    "tablet",
    css`
      height: 25vh;
    `
  )}

  ${mediaQuery(
    "desktop",
    css`
      height: 33vh;
    `
  )}
`;

const StyledOnScreen = styled(OnScreen)`
  height: 100%;
  width: 100%;
`;

const StyledCanvas = styled(FiberCanvas)`
  background-color: #000;
  cursor: grab;
  height: 100%;
  width: 100%;
`;

const WarpedMinecraftCase: React.FC<Props> = ({
  // @ts-expect-error wip
  cameraPosition = [0, 0, 1.1],
  children,
  ...rest
}: Props) => {
  const [rotation, setRotation] = React.useState<"disabled" | "enabled">(
    "enabled"
  );

  const enableRotation = React.useCallback(() => {
    setRotation("enabled");
  }, []);

  const disableRotation = React.useCallback(() => {
    setRotation("disabled");
  }, []);

  return (
    <Root {...rest}>
      <StyledOnScreen>
        <StyledCanvas
          camera={{ position: cameraPosition }}
          colorManagement
          gl={{
            alpha: true,
            antialias: true,
            depth: false,
            powerPreference: "high-performance",
            stencil: false,
          }}
          onClick={disableRotation}
        >
          <OrbitControls enableZoom={false} />

          <AutoRotation rotation={rotation}>{children}</AutoRotation>
        </StyledCanvas>
      </StyledOnScreen>

      {rotation === "disabled" && (
        <AnimateButton onClick={enableRotation}>↻</AnimateButton>
      )}
    </Root>
  );
};

export default WarpedMinecraftCase;
