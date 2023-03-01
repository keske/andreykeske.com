import React from "react";
import { Parallax } from "react-scroll-parallax";

import { WorkDetails } from "@/components/index";

const Desktop: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-10 py-80">
    <iframe
      className="h-1/2 w-1/2 border-0 2xl:w-1/5"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
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

export const Ikea = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
