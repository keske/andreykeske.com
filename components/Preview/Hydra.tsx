import React from "react";

import { WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId: string | null;
};

export const Hydra: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="absolute flex h-screen w-screen items-center justify-center bg-green-200 text-sm">
    <iframe
      allow="loop"
      className="w-1/2 border-0 2xl:w-1/2"
      src="/videos/hydra.mp4"
      title="Hydra"
    />
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>
        Hydra&apos;s representation of head regeneration through UI
        <br />
        <br />
        <a href="/files/hydra.zip">Download script (zip 2.9 KB)</a>
      </p>
    </WorkDescription>
  </div>
);
