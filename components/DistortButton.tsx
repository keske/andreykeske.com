import {
  Environment,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";
import { useRefComposer } from "react-ref-composer";

import { htmlSizeToMeshSize } from "@/utils/index";

export type DistortButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    children: string;
    size?: "lg" | "md" | "sm" | "xs";
    variant?: "primary" | "transparent";
  };

export type DistortButtonRef = React.LegacyRef<HTMLDivElement>;

export const DistortButton = React.forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      size = "md",
      variant = "primary",
      ...props
    }: DistortButtonProps,
    ref: DistortButtonRef,
  ) => {
    const composeRefs = useRefComposer();

    const wrapperRef = React.useRef<HTMLDivElement>();

    const [args, setArgs] = React.useState({ x: 0, y: 0, z: 0 });

    const countedSymbols = React.useMemo(
      () => children.split("").length,
      [children],
    );

    // const [divSize, setDivSize] = React.useState({ height: 0, width: 0 });

    const isDarkTheme = React.useMemo(
      () => window.matchMedia("(prefers-color-scheme: dark)").matches,
      [],
    );

    // const gl = useThree((state) => state.gl);

    React.useLayoutEffect(() => {
      if (wrapperRef.current) {
        // setDivSize({
        //   height: wrapperRef.current.offsetHeight,
        //   width: wrapperRef.current.offsetWidth,
        // });

        const x = htmlSizeToMeshSize(
          wrapperRef.current.offsetWidth,
          wrapperRef.current.offsetHeight,
          wrapperRef.current.offsetWidth,
          wrapperRef.current.offsetHeight,
        );

        setArgs(x);
      }
    }, []);

    // console.log("divSize", divSize);

    return (
      <div
        ref={composeRefs(ref, wrapperRef)}
        {...props}
        className={clsx("relative cursor-pointer", {
          // `size` states
          "p-5 text-lg": size == "lg",
          "py-1 px-3 text-xs": size == "xs",
          "py-3 px-5 text-sm": size == "sm",
          "text-md px-5 py-4": size == "md",
        })}
        // style={{
        //   border: "1px solid red",
        // }}
      >
        {variant !== "transparent" && (
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={
              {
                // border: "1px solid green",
                // height: `${divSize.height}px`,
                // width: `${divSize.width}px`,
              }
            }
          >
            <Canvas className="h-full w-full">
              <Environment preset="sunset" />
              <RoundedBox
                args={[args.x * 5.7, args.y * 4.3, args.z * 2.7]}
                // args={[args.x * 5.3, args.y * 3.1, args.z * 3.7]}
                radius={0.8}
              >
                <MeshDistortMaterial
                  color={
                    isDarkTheme ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"
                  }
                  distort={0.33}
                  factor={1}
                  metalness={1.5}
                  roughness={3}
                  speed={2.5}
                />
              </RoundedBox>
            </Canvas>
          </div>
        )}
        <div className="pointer-events-none relative left-0 top-0 flex h-full w-full items-center justify-center">
          <span
            className={clsx(
              className,
              `text-${size}`,
              "monospace text-white duration-100 dark:text-black",
              {
                // `disabled` styles
                "opacity-50": disabled,
              },
            )}
            // style={{
            //   color: "red",
            // }}
          >
            {children}
          </span>
        </div>
      </div>
    );
  },
);
