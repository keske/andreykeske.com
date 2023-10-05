import React from "react";

import type { NextPage } from "next";

import {
  Button,
  ButtonProps,
  Input,
  SegmentedControl,
  View,
} from "@/packages/atomic-ui";

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
        <Button size={buttonSize}>Button</Button>
        <Input
          placeholder="hello@andreykeske.com"
          type="email"
        ></Input>
      </View>
    </div>
  );
};

export default AtomicUI;
