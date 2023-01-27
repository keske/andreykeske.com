import React from "react";
import { Parallax } from "react-scroll-parallax";

import { WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

const Desktop: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex h-screen w-screen justify-center">
    <iframe
      className="w-1/4 border-0 2xl:w-1/5"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>The first discarded piece of IKEA furniture in Augmented Reality</p>
      <p>
        Made in{" "}
        <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
          IKEA Place
        </a>
      </p>
    </WorkDescription>
  </div>
);

const Mobile: React.FC = () => (
  <div>
    <video
      className="w-screen border-0"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
    <div className="absolute top-8 left-4">
      <Parallax speed={-3}>
        <h2 className="inline bg-white text-black">
          The first discarded piece of IKEA furniture in Augmented Reality
        </h2>
      </Parallax>
    </div>
  </div>
);

export const IkeaGarbage = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
