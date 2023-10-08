import React from "react";

import type { NextPage } from "next";

import {
  Button,
  ButtonProps,
  Input,
  SegmentedControl,
  View,
} from "@/packages/atomic-ui";
// import { BookmarkFilled24Icon } from "@/packages/icons";

export const BookmarkFilled24Icon: React.FC<
  Partial<SVGElement>
> = () => (
  <svg
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7.2C6 6.0799 6 5.51984 6.21799 5.09202C6.40973 4.71569 6.71569 4.40973 7.09202 4.21799C7.51984 4 8.0799 4 9.2 4H14.8C15.9201 4 16.4802 4 16.908 4.21799C17.2843 4.40973 17.5903 4.71569 17.782 5.09202C18 5.51984 18 6.0799 18 7.2V17.6964C18 19.4057 18 20.2603 17.6772 20.6173C17.3977 20.9264 16.9826 21.076 16.5701 21.016C16.0939 20.9468 15.549 20.2883 14.4592 18.9715L12.3082 16.3724C12.2024 16.2446 12.1495 16.1807 12.0861 16.1574C12.0305 16.137 11.9695 16.137 11.9139 16.1574C11.8505 16.1807 11.7976 16.2446 11.6918 16.3724L9.54079 18.9715C8.45102 20.2884 7.90614 20.9468 7.42985 21.016C7.01744 21.076 6.60227 20.9264 6.32278 20.6173C6 20.2603 6 19.4057 6 17.6964V7.2Z"
      fill="currentColor"
    />
  </svg>
);

const AtomicUI: NextPage = () => {
  const segmentedControlItems = ["lg", "md", "sm", "xs"];

  const [buttonSize, setButtonSize] =
    React.useState<ButtonProps["size"]>("md");

  return (
    <div className="w-scree h-screen bg-black p-10">
      <View className="flex flex-col gap-10 p-10">
        <SegmentedControl
          items={segmentedControlItems}
          onValueChange={setButtonSize}
        />
        <Button
          endIcon={<BookmarkFilled24Icon />}
          size={buttonSize}
          startIcon={<BookmarkFilled24Icon />}
        >
          Button
        </Button>
        <Input
          placeholder="hello@andreykeske.com"
          type="email"
        ></Input>
      </View>
    </div>
  );
};

export default AtomicUI;
