/* eslint no-plusplus: 0 */
/* eslint @typescript-eslint/restrict-plus-operands: 0 */

import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import * as R from "ramda";

// Local
import Canvas from "./Canvas";
import Controls from "./Controls";
import Scene from "./Scene";

import type { Data } from "./@types";

const { PUBLIC_URL } = process.env;

const StyledCanvas = styled.canvas`
  display: none;
`;

const StyledImage = styled.img`
  display: none;
`;

const AtomicPhotos: React.FC = () => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  const image = React.useRef<HTMLImageElement>(null);

  const data: Data = React.useMemo(() => [], []);

  const height = 173;

  const width = 173;

  const getColorAtOffset = React.useCallback(
    (imageData, offset: number) =>
      (
        (imageData[offset + 2] * 65536 +
          imageData[offset + 1] * 256 +
          imageData[offset]) /
        1000000
      ).toFixed(0),
    []
  );

  React.useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    image.current.onload = () => {
      ctx.drawImage(image.current, 0, 0);

      const imageData = ctx.getImageData(0, 0, width, height);

      R.range(0, height).forEach((y) => {
        R.range(0, width).forEach((x) => {
          const offset = (y * width + x) * 4;

          const density = parseInt(
            getColorAtOffset(imageData.data, offset),
            10
          );

          data.push({
            density,
            x,
            y,
          });
        });
      });
    };
  }, [data, getColorAtOffset]);

  return (
    <>
      <StyledCanvas ref={canvas} height={height} width={width} />
      <StyledImage ref={image} src={`${PUBLIC_URL}/static/about/_me.jpg`} />

      <Controls />

      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom />
          <Scene blocks={data} height={height} width={width} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default AtomicPhotos;
