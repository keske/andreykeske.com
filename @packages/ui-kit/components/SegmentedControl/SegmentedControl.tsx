import * as ToggleGroup from "@radix-ui/react-toggle-group";
import React from "react";

import { SegmentedControlIndicator } from "./SegmentedControlIndicator";
import { SegmentedControlItem } from "./SegmentedControlItem";

import { mergeRefs, useRefs, useResizeObserver } from "../../hooks";

export type SegmentedControlProps = Omit<
  ToggleGroup.ToggleGroupSingleProps,
  "children" | "type"
> & {
  items: string[];
  segmentedControlIndicatorElement?: React.ReactElement<
    any,
    React.JSXElementConstructor<any> | string
  >;
};

export const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  SegmentedControlProps
>(
  (
    {
      defaultValue,
      items,
      onValueChange,
      segmentedControlIndicatorElement,
      ...toggleGroupRootProps
    },
    forwardedRef,
  ) => {
    const [getItemRef] = useRefs<HTMLButtonElement>();

    const [indicatorStyles, setIndicatorStyles] =
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

    const calculateIndicatorStyles = React.useCallback(() => {
      const activeItemElement = getItemRef(value).current;

      if (!activeItemElement) {
        return;
      }

      const activeItemRect =
        activeItemElement.getBoundingClientRect();

      setIndicatorStyles({
        height: activeItemRect.height,
        left: activeItemElement.offsetLeft,
        top: activeItemElement.offsetTop,
        width: activeItemRect.width,
      });
    }, [getItemRef, value]);

    const { ref } = useResizeObserver<HTMLDivElement>({
      onResize: calculateIndicatorStyles,
    });

    const segmentedControlIndicator = React.useMemo(
      () =>
        segmentedControlIndicatorElement ? (
          React.cloneElement(segmentedControlIndicatorElement, {
            indicatorStyles,
          })
        ) : (
          <SegmentedControlIndicator styles={indicatorStyles} />
        ),
      [indicatorStyles, segmentedControlIndicatorElement],
    );

    React.useEffect(() => {
      calculateIndicatorStyles();
    }, [calculateIndicatorStyles, value]);

    return (
      <ToggleGroup.Root
        defaultValue={value}
        onValueChange={handleValueChange}
        ref={mergeRefs(ref, forwardedRef)}
        type="single"
        {...toggleGroupRootProps}
      >
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
    );
  },
);
