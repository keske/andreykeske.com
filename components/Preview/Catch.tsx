import React from "react";
import { Parallax } from "react-scroll-parallax";

import { interpolate } from "@/utils/index";

const MAX_INDEX = 57;

const Desktop = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      allow="loop"
      className="w-1/2 border-0 2xl:w-1/2"
      src="/videos/catch.mp4"
      title="The Catch"
    />
  </div>
);

const Mobile = () => {
  const [index, setIndex] = React.useState(1);

  const handleProgress = React.useCallback((progress: number) => {
    const newIndex = Math.round(
      interpolate([0.3, 0.5], [1, MAX_INDEX], progress),
    );

    setIndex(newIndex);
  }, []);

  return (
    <div
      className={"flex h-screen w-screen flex-col items-center justify-center"}
    >
      <Parallax onProgressChange={handleProgress}>
        <img className="w-full" src={`/images/catch/catch_${index}.jpg`} />
        <div className="m-4">
          <h2>The Catch</h2>
          <p>
            The application icon in the dock is a trap from the Ghostbusters
          </p>
          <p>
            The window is a ghost. Window minimization represents a scene from
            the movie of catching a ghost
          </p>
          <p>Thanks: Andrey Smirny and Nikita Rokotyan</p>
        </div>
      </Parallax>
    </div>
  );
};

export const Catch = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
