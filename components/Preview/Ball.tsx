import React from "react";

export const Ball = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      allow="loop"
      className="w-1/4 border-0 2xl:w-1/5"
      src="/videos/ball.mp4"
      title="Ball in the Dock"
    />
  </div>
);
