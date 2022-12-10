import { useWheel } from "@use-gesture/react";
import clsx from "clsx";
import React from "react";
import { Parallax } from "react-scroll-parallax";

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

  // const bind = useWheel(({ direction, offset }) => {
  //   const getIndex = () => {
  //     const newIndex = Math.round(offset[1] / 10);

  //     if (newIndex <= 0) {
  //       return 1;
  //     }

  //     if (newIndex >= MAX_INDEX) {
  //       return MAX_INDEX;
  //     }

  //     return newIndex;
  //   };

  //   if (direction[1] > 0) {
  //     if (index < MAX_INDEX) {
  //       setIndex(getIndex());
  //     }
  //   } else if (direction[1] < 0) {
  //     if (index > 1) {
  //       setIndex(getIndex());
  //     }
  //   }
  // });

  // const lerp = (x, y, a) => x * (1 - a) + y * a;

  // const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));

  // const invlerp = (x, y, a) => clamp((a - x) / (y - x));

  // const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

  const interpolate = (
    xarr: readonly number[],
    yarr: readonly number[],
    xpoint: number,
  ) => {
    const xa = [...xarr].reverse().find((x) => x <= xpoint);

    const xb = xarr.find((x) => x >= xpoint);

    if (!xa) {
      return yarr[0];
    }

    if (!xb) {
      return yarr[1];
    }

    const ya = yarr[xarr.indexOf(xa)];

    const yb = yarr[xarr.indexOf(xb)];

    return (
      yarr[xarr.indexOf(xpoint)] || ya + ((xpoint - xa) * (yb - ya)) / (xb - xa)
    );
  };

  const handleProgress = React.useCallback((progress: number) => {
    const newIndex = Math.round(interpolate([0.3, 0.5], [1, 57], progress));

    setIndex(newIndex);
  }, []);

  return (
    <div
      className={clsx(
        "flex h-screen w-screen flex-col items-center justify-center",
      )}
    >
      <Parallax
        onProgressChange={handleProgress}
        // speed={-10}
      >
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

const Catch = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );

export default Catch;
