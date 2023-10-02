import React from "react";

import type { NextPage } from "next";

import { Button, SegmentedControl, View } from "@/packages/atomic-ui";

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen bg-black p-10">
    <SegmentedControl items={["List", "Grid"]} />
    <View className="flex flex-col gap-8 p-10">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </View>
  </div>
);

export default AtomicUI;
