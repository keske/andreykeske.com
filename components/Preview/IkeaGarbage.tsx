import React from "react";
import { Parallax } from "react-scroll-parallax";

const Desktop = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      className="w-1/4 border-0 2xl:w-1/5"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
    <p className="absolute right-10 bottom-10">
      Made in{" "}
      <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
        IKEA Place
      </a>
    </p>
  </div>
);

const Mobile = () => (
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

export default () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
