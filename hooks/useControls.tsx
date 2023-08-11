import * as R from "ramda";
import React from "react";
import { createRoot } from "react-dom/client";

import { Controls } from "@/components";

export type ControlInputNumber = {
  label: string;
  max?: number;
  min?: number;
  step?: number;
  value: number;
};

export type ControlsConfig = {
  draggable?: boolean;
  hidden?: boolean;
  position?: "bottom-left" | "bottom-right" | "bottom";
};

export type ControlsOptions = Record<
  string,
  ControlInputNumber | (any & { type: string })
>;

export const useControls = (
  initialOptions: ControlsOptions,
  config: ControlsConfig = {
    draggable: false,
    hidden: false,
    position: "bottom",
  },
) => {
  const id = React.useId();

  const [options, setOptions] = React.useState<ControlsOptions>(
    R.pipe(
      R.keys,
      R.map((key) => {
        const obj = R.prop(key, initialOptions);

        return {
          [key]: {
            label: key.replace(/([0-9A-Z])/g, " $&").toLowerCase(),
            type:
              typeof obj.value === "number" ? "number" : "checkbox",
            ...(typeof obj === "number"
              ? {
                  value: obj,
                }
              : {
                  ...obj,
                  value: obj.value,
                }),
          },
        };
      }),
      R.mergeAll,
    )(initialOptions) as ControlsOptions,
  );

  const hendleUpdate = React.useCallback(
    (updatedOptions: ControlsOptions) => {
      setOptions(updatedOptions);
    },
    [],
  );

  React.useEffect(() => {
    const controlsElement =
      document.getElementById(id) ||
      Object.assign(document.createElement("div"), { id });

    if (document.body) {
      const root = createRoot(controlsElement);

      document.body.appendChild(controlsElement);
      root.render(
        <Controls
          {...config}
          onUpdate={hendleUpdate}
          options={options}
        />,
      );
    }

    return () => {
      if (document.body) {
        document.body.removeChild(controlsElement);
      }
    };
  }, [config, hendleUpdate, id, initialOptions, options]);

  return options;
};
