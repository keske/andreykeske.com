import React from "react";

import { Button, WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const Hydra: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <iframe
      allow="loop"
      className="h-screen w-1/2 border-0"
      src="/videos/hydra.mp4"
      title="Hydra"
    />
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>
        Hydra&apos;s representation of head regeneration through UI
        <br />
        <br />
        <Button as="a" href="/files/hydra.zip" variant="primary">
          Download script (zip 2.9 KB)
        </Button>
      </p>
    </WorkDescription>
  </div>
);
