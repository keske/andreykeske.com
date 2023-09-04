import { Bounds, RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import {
  PlasmaMaterialOptions,
  usePlasmaMaterial,
} from "@/packages/shader-ui";
import { mergeRefs } from "@/packages/ui-kit";

const PlasmaRoundedBox = React.forwardRef<
  React.ElementRef<typeof RoundedBox>,
  PlasmaMaterialOptions
>(
  ({
    colors = [
      new THREE.Color("#000"),
      new THREE.Color("green"),
      new THREE.Color("#F03"),
      new THREE.Color("green"),
      new THREE.Color("blue"),
      new THREE.Color("magenta"),
    ],
    frequency = { x: 10.0, y: 100.0, z: 10.0 },
    intensivity = 10000,
    time = 0.3,
  }) => {
    const buttonMaterial = usePlasmaMaterial({
      colors,
      frequency,
      intensivity,
      time,
    });

    return (
      <RoundedBox
        args={[0.8, 0.2, 0.1]}
        material={buttonMaterial}
        position={[0, 0, 0]}
        radius={0.1}
      />
    );
  },
);

export type PlasmaButtonProps = PlasmaMaterialOptions &
  React.PropsWithChildren;

export const PlasmaButton = React.forwardRef<
  HTMLDivElement,
  PlasmaButtonProps
>(({ children }, forwardedRef) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [indicatorStyles, setIndicatorStyles] =
    React.useState<React.CSSProperties>({});

  const calculateIndicatorStyles = React.useCallback(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    setIndicatorStyles({
      height: rect.height,
      left: element.offsetLeft,
      top: element.offsetTop,
      width: rect.width,
    });
  }, [ref]);

  React.useEffect(() => {
    calculateIndicatorStyles();
  }, [calculateIndicatorStyles]);

  return (
    <>
      <div
        className="absolute z-10 px-10 py-20"
        ref={mergeRefs(forwardedRef, ref)}
      >
        <p className="text-white">{children}</p>
      </div>
      <Canvas
        className="f-full absolute h-full"
        style={indicatorStyles}
      >
        <Bounds clip fit margin={0.95}>
          <PlasmaRoundedBox />
        </Bounds>
      </Canvas>
    </>
  );
});
