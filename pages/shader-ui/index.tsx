import React from "react";

import type { NextPage } from "next";

import { PlasmaButton } from "@/packages/shader-ui";

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen bg-slate-900 p-10">
    <div className="flex flex-col gap-8">
      <PlasmaButton size="xs">Button</PlasmaButton>
      <PlasmaButton size="sm">Button</PlasmaButton>
      <PlasmaButton size="md">Button</PlasmaButton>
      <PlasmaButton size="lg">Button</PlasmaButton>
    </div>
  </div>
);

export default AtomicUI;
