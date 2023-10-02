import * as ToggleGroup from "@radix-ui/react-toggle-group";
import React from "react";

import { SegmentedControlIndicator } from "./SegmentedControlIndicator";
import { SegmentedControlItem } from "./SegmentedControlItem";

import { mergeRefs, useRefs, useResizeObserver } from "../../hooks";

export type SegmentedControlProps = Omit<
  ToggleGroup.ToggleGroupSingleProps,
  "children" | "type"
> & {
  indicatorElement?: React.ReactElement;
  items: string[];
  rootElement?: React.ReactElement;
};

export const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  SegmentedControlProps
>(
  (
    {
      defaultValue,
      indicatorElement,
      items,
      onValueChange,
      rootElement,
      ...toggleGroupRootProps
    },
    forwardedRef,
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    const [getItemRef] = useRefs<HTMLButtonElement>();

    const [indicatorStyles, setIndicatorStyles] =
      React.useState<React.CSSProperties>({});

    const [rootStyles, setRootStyles] =
      React.useState<React.CSSProperties>({});

    const [value, setValue] = React.useState(
      defaultValue || items[0],
    );

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        onValueChange?.(newValue);
        setValue(newValue);
      },
      [onValueChange],
    );

    const calculateStyles = React.useCallback(
      <T extends HTMLElement>(
        ref: React.RefObject<T>,
        callback: (styles: React.CSSProperties) => void,
      ) => {
        const element = ref.current;

        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();

        callback({
          height: rect.height,
          left: element.offsetLeft,
          top: element.offsetTop,
          width: rect.width,
        });
      },
      [],
    );

    const calculateIndicatorStyles = React.useCallback(() => {
      calculateStyles(getItemRef(value), setIndicatorStyles);
    }, [calculateStyles, getItemRef, value]);

    const calculateRootStyles = React.useCallback(() => {
      if (rootElement) {
        calculateStyles(rootRef, setRootStyles);
      }
    }, [calculateStyles, rootElement]);

    const calculateAllStyles = React.useCallback(() => {
      calculateIndicatorStyles();
      calculateRootStyles();
    }, [calculateIndicatorStyles, calculateRootStyles]);

    const { ref } = useResizeObserver<HTMLDivElement>({
      onResize: calculateAllStyles,
    });

    const rootControlIndicator = React.useMemo(
      () =>
        rootElement ? (
          React.cloneElement(rootElement, {
            style: {
              height: rootStyles.height,
              position: "absolute",
              width: rootStyles.width,
            },
          })
        ) : (
          <></>
        ),
      [rootElement, rootStyles],
    );

    const segmentedControlIndicator = React.useMemo(
      () =>
        indicatorElement ? (
          React.cloneElement(indicatorElement, {
            style: {
              ...indicatorStyles,
              position: "absolute",
            },
          })
        ) : (
          <SegmentedControlIndicator style={indicatorStyles} />
        ),
      [indicatorStyles, indicatorElement],
    );

    React.useEffect(() => {
      calculateIndicatorStyles();
    }, [calculateIndicatorStyles, value]);

    return (
      <div className="relative">
        <ToggleGroup.Root
          className="absolute"
          defaultValue={value}
          onValueChange={handleValueChange}
          ref={mergeRefs(forwardedRef, ref, rootRef)}
          type="single"
          {...toggleGroupRootProps}
        >
          {rootControlIndicator}
          {segmentedControlIndicator}
          {items.map((item, index) => (
            <SegmentedControlItem
              key={index}
              ref={getItemRef(item)}
              value={item}
            >
              {item}
            </SegmentedControlItem>
          ))}
        </ToggleGroup.Root>
      </div>
    );
  },
);
