import * as ToggleGroup from "@radix-ui/react-toggle-group";
import React from "react";

import { SegmentedControlIndicator } from "./SegmentedControlIndicator";
import { SegmentedControlItem } from "./SegmentedControlItem";

import { mergeRefs, useRefs, useResizeObserver } from "../../hooks";

export type SegmentedControlRef = typeof ToggleGroup.Root;

export type SegmentedControlProps = Omit<
  ToggleGroup.ToggleGroupSingleProps,
  "children" | "type"
> & {
  indicatorElement?: React.ReactElement;
  items: string[];
  rootElement?: React.ReactElement;
};

export const SegmentedControl = React.forwardRef<
  React.ElementRef<SegmentedControlRef>,
  SegmentedControlProps
>(
  (
    {
      defaultValue,
      indicatorElement,
      items,
      onValueChange,
      rootElement,
      ...props
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
            style: rootStyles,
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
            style: indicatorStyles,
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
      <ToggleGroup.Root
        className="relative rounded-2xl"
        defaultValue={value}
        onValueChange={handleValueChange}
        ref={mergeRefs(forwardedRef, ref, rootRef)}
        type="single"
        {...props}
      >
        {rootControlIndicator}
        {segmentedControlIndicator}
        {items.map((item) => (
          <SegmentedControlItem
            key={item}
            ref={getItemRef(item)}
            value={item}
          >
            {item}
          </SegmentedControlItem>
        ))}
      </ToggleGroup.Root>
    );
  },
);

SegmentedControl.displayName = "SegmentedControl";
