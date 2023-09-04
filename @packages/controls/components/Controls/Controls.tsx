import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import type { ControlsConfig, ControlsOptions } from "../../hooks";

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

  const handleUpdate = React.useCallback(
    (key: string, value: boolean | string) => {
      onUpdate({
        ...options,
        [key]: {
          ...options[key],
          value,
        },
      });
    },
    [onUpdate, options],
  );

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
        "absolute z-50 select-none rounded-xl bg-white p-3 font-sans text-xs dark:bg-gray-900",
        {
          // position states
          "bottom-10 left-1/2 flex -translate-x-1/2":
            position === "bottom",
          "bottom-10 left-10": position === "bottom-left",
          "bottom-10 right-10": position === "bottom-right",
        },
        {
          // draggable states
          "cursor-grab": draggable,
        },
      )}
    >
      <div className="flex flex-col gap-4">
        {R.keys(options).map((key, index) => {
          const { label, type, value, ...rest } = options[key];

          return (
            <div
              className="flex  flex-row place-content-between items-center gap-5"
              key={index}
            >
              <span className="first-letter:uppercase">{label}</span>
              {type === "checkbox" && (
                <input
                  checked={value}
                  onChange={(event) => {
                    handleUpdate(key, event.target.checked);
                  }}
                  type="checkbox"
                />
              )}
              {type === "number" && (
                <input
                  className="w-1/3 rounded-lg border-none bg-slate-200 p-1 outline-none dark:bg-gray-800"
                  defaultValue={value}
                  onChange={(event) => {
                    handleUpdate(key, event.target.value);
                  }}
                  type="number"
                  {...{
                    ...(rest.max && { max: rest.max }),
                    ...(rest.min && { min: rest.min }),
                    ...(rest.step && { step: rest.step }),
                  }}
                />
              )}
            </div>
          );

          return <>Unknown type</>;
        })}
      </div>
    </animated.div>
  );
};
