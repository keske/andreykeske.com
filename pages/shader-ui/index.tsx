import React from "react";

import type { NextPage } from "next";

import { Button } from "@/packages/shader-ui";

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen bg-slate-900 p-10">
    <div className="flex flex-col gap-8">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg" variant="plasma">
        Button
      </Button>

      <Button size="xs" variant="starfield">
        Button
      </Button>
      <Button size="sm" variant="starfield">
        Button
      </Button>
      <Button size="md" variant="starfield">
        Button
      </Button>
      <Button size="lg" variant="starfield">
        Button
      </Button>
    </div>
  </div>
);

export default AtomicUI;
