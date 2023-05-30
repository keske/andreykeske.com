import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { useSize, useVector2, useVector3 } from "@/hooks/index";
import {
  htmlPositionToCanvasPosition,
  htmlSizeToMeshSize,
} from "@/utils/index";

type PositionAndSize = Pick<
  DOMRect,
  "height" | "left" | "top" | "width"
>;

/**
 * ---------------------------------------------------------------------
 */

type CommonMeshDistortMaterialProps = {
  distort?: number;
};

const CommonMeshDistortMaterial = React.forwardRef<
  unknown | undefined,
  CommonMeshDistortMaterialProps
>(({ distort = 0.4, ...props }, forwardedRef) => (
  <MeshDistortMaterial
    {...props}
    distort={distort}
    factor={1}
    metalness={1.5}
    ref={forwardedRef}
    roughness={3}
    speed={2.5}
  />
));

/**
 * ---------------------------------------------------------------------
 */

type DistortPaneProps = {
  positionAndSize: PositionAndSize;
};

type DistortPaneRef = THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[]
>;

const DistortPane = React.forwardRef<
  DistortPaneRef,
  DistortPaneProps
>(
  (
    { positionAndSize: { height, left, top, width } },
    forwardedRef,
  ) => {
    const gl = useThree((state) => state.gl);

    const [args, setArgs] = useVector3();

    const [position, setPosition] = useVector3();

    console.log("position", position);

    React.useEffect(() => {
      setArgs(
        htmlSizeToMeshSize(
          width,
          height,
          gl.domElement.offsetWidth,
          gl.domElement.offsetHeight,
        ),
      );
      setPosition([
        ...htmlPositionToCanvasPosition(
          left,
          top,
          width,
          height,
          width,
          height,
        ),
        0,
      ]);
    }, [
      gl.domElement.offsetHeight,
      gl.domElement.offsetWidth,
      height,
      left,
      setArgs,
      setPosition,
      top,
      width,
    ]);

    return (
      <RoundedBox
        args={args}
        position={position}
        radius={args[0] / 5}
        ref={forwardedRef}
        scale={4.5}
      >
        <CommonMeshDistortMaterial />
      </RoundedBox>
    );
  },
);

/**
 * ---------------------------------------------------------------------
 */

type VirtualViewProps = React.PropsWithChildren & {
  onLayout: (positionAndSize: PositionAndSize) => void;
};

const VirtualView: React.FC<VirtualViewProps> = ({
  children,
  onLayout,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const { height, left, top, width } =
        ref.current.getBoundingClientRect();

      onLayout({ height, left, top, width });
    }
  }, [onLayout]);

  return <span ref={ref}>{children}</span>;
};

/**
 * ---------------------------------------------------------------------
 */

export type DistortCanvasProps = {
  elements: DistortElement[];
};

export type DistortCanvasRef = HTMLCanvasElement;

export const DistortCanvas = React.forwardRef<
  DistortCanvasRef,
  DistortCanvasProps
>(({ elements }, forwardedRef) => {
  const [canvasSize, setCanvasSize] = useSize();

  const renderElements = React.useMemo(
    () =>
      elements.map((element, index) => {
        if (element.displayName === "distort-div") {
          return <DistortPane {...element} key={index}></DistortPane>;
        }

        return <mesh key={index}></mesh>;
      }),
    [elements],
  );

  return (
    <Canvas
      className="h-full w-full"
      ref={forwardedRef}
      style={{ border: "1px solid blue" }}
    >
      <OrbitControls />
      <Environment preset="sunset" />
      {renderElements}
    </Canvas>
  );
});

/**
 * ---------------------------------------------------------------------
 */

export type DistortDivProps = React.HTMLAttributes<HTMLDivElement>;

export type DistortDivRef = HTMLDivElement;

export const DistortDiv = React.forwardRef<
  DistortDivRef,
  DistortDivProps
>((props, ref) => React.createElement("div", { ...props, ref }));

DistortDiv.displayName = "distort-div";

/**
 * ---------------------------------------------------------------------
 */

type DistortElement = {
  displayName: "distort-div";
  positionAndSize: PositionAndSize;
};

type DistortProps = {
  children: React.ReactNode[];
};

type DistortRef = HTMLDivElement;

const Distort = React.forwardRef<DistortRef, DistortProps>(
  ({ children }, forwardedRef) => {
    const [elements, setElements] = React.useState<DistortElement[]>(
      [],
    );

    const renderChildren = React.useMemo(
      () =>
        children.map((child, index) => {
          if (React.isValidElement(child)) {
            const {
              key,
              // @ts-expect-error WIP
              type: { displayName },
            } = child;

            return (
              <VirtualView
                key={key ?? index}
                onLayout={(positionAndSize) => {
                  setElements((state) =>
                    // TODO: Figure out better solution
                    R.uniq([
                      ...state,
                      {
                        displayName,
                        positionAndSize,
                      },
                    ]),
                  );
                }}
              >
                {child}
              </VirtualView>
            );
          }

          return child;
        }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [children],
    );

    return (
      <div ref={forwardedRef}>
        <div className="absolute">{renderChildren}</div>
        <DistortCanvas elements={elements} />
      </div>
    );
  },
);

/**
 * ---------------------------------------------------------------------
 */

export const DistortMessenger: React.FC = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-20 pb-20 pt-56">
    <div
      className="flex h-5/6 w-1/3 flex-row"
      style={{ border: "1px solid red" }}
    >
      <Distort>
        <DistortDiv className="h-[100px] w-[100px]">First</DistortDiv>
        <DistortDiv className="top-[10px] ml-[100px]">
          Second bla bla
        </DistortDiv>
      </Distort>
    </div>
  </div>
);
