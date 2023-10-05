import React from "react";

import type { NextPage } from "next";

import { Button } from "@/packages/shader-ui";

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen bg-slate-900 p-10">
    <div className="flex flex-col gap-8">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>

      <Button shader="starfield" size="xs">
        Button
      </Button>
      <Button shader="starfield" size="sm">
        Button
      </Button>
      <Button shader="starfield" size="md">
        Button
      </Button>
      <Button shader="starfield" size="lg">
        Button
      </Button>

      <Button shader="noise" size="xs">
        Button
      </Button>
      <Button shader="noise" size="sm">
        Button
      </Button>
      <Button shader="noise" size="md">
        Button
      </Button>
      <Button shader="noise" size="lg">
        Button
      </Button>
    </div>
  </div>
);

export default AtomicUI;
