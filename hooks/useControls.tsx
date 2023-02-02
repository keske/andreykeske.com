import * as R from "ramda";
import React from "react";
import ReactDOM from "react-dom";

import { Controls } from "@/components/index";

export type ControlsConfig = {
  draggable?: boolean;
  position?: "bottom-left" | "bottom-right" | "bottom";
};

export type ControlInputNumber = {
  label: string;
  max?: number;
  min?: number;
  step?: number;
  value: number;
};

export type ControlsOptions = Record<
  string,
  ControlInputNumber | (any & { type: string })
>;

export const useControls = (
  initialOptions: ControlsOptions,
  config: ControlsConfig = {
    draggable: false,
    position: "bottom",
  },
) => {
  const [options, setOptions] = React.useState<ControlsOptions>(
    R.pipe(
      R.keys,
      R.map((key) => {
        const obj = R.prop(key, initialOptions);

        return {
          [key]: {
            label: key,
            type: "number",
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
    )(initialOptions),
  );

  const hendleUpdate = React.useCallback((updatedOptions: ControlsOptions) => {
    setOptions(updatedOptions);
  }, []);

  React.useEffect(() => {
    const controlsElement =
      document.getElementById("controls") ||
      Object.assign(document.createElement("div"), { id: "controls" });

    if (document.body) {
      document.body.appendChild(controlsElement);
      ReactDOM.render(
        <Controls {...config} onUpdate={hendleUpdate} options={options} />,
        controlsElement,
      );
    }
  }, [config, hendleUpdate, initialOptions, options]);

  return options;
};
