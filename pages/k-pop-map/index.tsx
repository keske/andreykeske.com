import React from "react";

import type { NextPage } from "next";

import { Head } from "@/components";
import { Button } from "@/packages/shader-ui";
import { SegmentedControl } from "@/packages/ui-kit";

const Recent: NextPage = () => (
  <>
    <Head />

    <main>
      <div className="absolute left-10 top-24 flex flex-col gap-20 pb-36">
        <SegmentedControl
          indicatorElement={<Button />}
          items={["1", "2"]}
        />
      </div>
    </main>
  </>
);

export default Recent;
