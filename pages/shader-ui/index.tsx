import React from "react";

import type { NextPage } from "next";

import { PlasmaButton } from "@/packages/shader-ui";

const AtomicUI: NextPage = () => (
  <div className="w-scree h-screen bg-slate-900">
    <PlasmaButton>Button</PlasmaButton>
  </div>
);

export default AtomicUI;
