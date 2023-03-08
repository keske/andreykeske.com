import React from "react";
import { Parallax } from "react-scroll-parallax";

import { WorkDetails } from "@/components/index";

const Desktop: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-10 pt-40 pb-20">
    <div className="aspect-w-2 aspect-h-1 w-screen xl:aspect-w-2 xl:aspect-h-1 2xl:aspect-w-3 2xl:aspect-h-1">
      <iframe
        className="border-0"
        src="/videos/ikea.mp4"
        title="The first discarded piece of IKEA furniture in Augmented Reality"
      />
    </div>
    <WorkDetails>
      <p>
        The first discarded piece of IKEA furniture in Augmented Reality
        <br />
        <br />
        Made in{" "}
        <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
          IKEA Place
        </a>
      </p>
    </WorkDetails>
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

export const ARIkea = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
