import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import type { ControlsConfig, ControlsOptions } from "@/hooks/index";

type ControlsProps = ControlsConfig & {
  onUpdate: (options: ControlsOptions) => void;
  options: ControlsOptions;
};

export const Controls: React.FC<ControlsProps> = ({
  draggable = false,
  hidden,
  onUpdate,
  options,
  position = "bottom",
}) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useGesture({
    onDrag: ({ offset: [ox, oy] }) => {
      api.start({
        // immediate: !draggable,
        x: ox,
        y: oy,
      });
    },
  });

  if (hidden) {
    return <></>;
  }

  return (
    <animated.div
      {...(draggable && bind())}
      {...(draggable && {
        style: {
          x,
          y,
        },
      })}
      className={clsx(
        "absolute z-50 select-none rounded-xl bg-white p-2 font-sans text-sm",
        {
          // position states
          "bottom-10 left-1/2 flex -translate-x-1/2": position === "bottom",
          "bottom-10 left-10": position === "bottom-left",
          "bottom-10 right-10": position === "bottom-right",

          // draggable states
          "cursor-grab": draggable,
        },
      )}
    >
      <div className="flex flex-col gap-4">
        {R.keys(options).map((key, index) => {
          const { type, value, ...rest } = options[key];

          if (type === "number") {
            return (
              <div className="flex flex-row items-center gap-2" key={index}>
                {key}
                <input
                  className="rounded-sm border-[1px] p-2 outline-none"
                  defaultValue={value}
                  onChange={(event) => {
                    onUpdate({
                      ...options,
                      [key]: {
                        ...options[key],
                        value: event.target.value,
                      },
                    });
                  }}
                  type="number"
                  {...{
                    ...(rest.max && { max: rest.max }),
                    ...(rest.min && { min: rest.min }),
                    ...(rest.step && { step: rest.step }),
                  }}
                />
              </div>
            );
          }

          return <>Unknown type</>;
        })}
      </div>
    </animated.div>
  );
};
