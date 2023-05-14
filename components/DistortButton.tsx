import {
  Environment,
  Icosahedron,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";
import * as THREE from "three";

import type { ButtonProps } from "./Button";

export type DistortButtonProps = Pick<
  ButtonProps<React.ButtonHTMLAttributes<HTMLButtonElement>>,
  "disabled"
> &
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
    const symbolsCount = React.useMemo(
      () => children.split("").length,
      [children],
    );

    const isDarkTheme = React.useMemo(
      () => window.matchMedia("(prefers-color-scheme: dark)").matches,
      [],
    );

    const scale = React.useMemo<[x: number, y: number, z: number]>(
      () => [symbolsCount + 2, 3.7, 1],
      [symbolsCount],
    );

    const wrapperSize = React.useMemo<{
      [key in "lg" | "md" | "sm" | "xs"]: {
        height: number | string;
        width: number | string;
      };
    }>(
      () => ({
        lg: {
          height: "3.425rem",
          width: symbolsCount * 24,
        },
        md: {
          height: "2.925rem",
          width: symbolsCount * 21,
        },
        sm: {
          height: "2.625rem",
          width: symbolsCount * 15,
        },
        xs: {
          height: "2.125rem",
          width: symbolsCount * 12,
        },
      }),
      [symbolsCount],
    );

    return (
      <div
        ref={ref}
        {...props}
        className="relative cursor-pointer"
        style={{
          ...wrapperSize[`${size}`],
        }}
      >
        {variant !== "transparent" && (
          <div className="h-full w-full">
            <Canvas>
              <Environment preset="sunset" />
              <Icosahedron
                args={[1, 30]}
                position={[0, 0, 0]}
                scale={scale}
                // scale={[8, 3.7, 1]}
              >
                <MeshDistortMaterial
                  color={
                    isDarkTheme ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"
                  }
                  distort={0.2}
                  metalness={2.1}
                  roughness={0.7}
                />
              </Icosahedron>
            </Canvas>
          </div>
        )}
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
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
          >
            {children}
          </span>
        </div>
      </div>
    );
  },
);
