import * as ToggleGroup from "@radix-ui/react-toggle-group";
import React from "react";

import { SegmentedControlIndicator } from "./SegmentedControlIndicator";
import { SegmentedControlItem } from "./SegmentedControlItem";

import { mergeRefs, useRefs, useResizeObserver } from "@/hooks/index";

export type SegmentedControlProps = Omit<
  ToggleGroup.ToggleGroupSingleProps,
  "children" | "type"
> & {
  items: string[];
};

export const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  SegmentedControlProps
>(
  (
    { defaultValue, items, onValueChange, ...toggleGroupRootProps },
    forwardedRef,
  ) => {
    const [getItemRef] = useRefs<HTMLButtonElement>();

    const [indicatorPositionStyles, setIndicatorPositionStyles] =
      React.useState<React.CSSProperties>();

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

    const recalculateIndicatorPosition = React.useCallback(() => {
      const activeItemElement = getItemRef(value).current;

      if (!activeItemElement) {
        return;
      }

      const activeItemRect =
        activeItemElement.getBoundingClientRect();

      setIndicatorPositionStyles({
        height: activeItemRect.height,
        left: activeItemElement.offsetLeft,
        top: activeItemElement.offsetTop,
        width: activeItemRect.width,
      });
    }, [getItemRef, value]);

    const { ref } = useResizeObserver<HTMLDivElement>({
      onResize: recalculateIndicatorPosition,
    });

    React.useEffect(() => {
      recalculateIndicatorPosition();
    }, [recalculateIndicatorPosition, value]);

    return (
      <ToggleGroup.Root
        defaultValue={value}
        onValueChange={handleValueChange}
        ref={mergeRefs(ref, forwardedRef)}
        type="single"
        {...toggleGroupRootProps}
      >
        <SegmentedControlIndicator
          className="absolute h-full w-full transition-all duration-200"
          style={indicatorPositionStyles}
        />
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
