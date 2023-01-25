import React from "react";

export const Hydra = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      allow="loop"
      className="w-1/2 border-0 2xl:w-1/2"
      src="/videos/hydra.mp4"
      title="Hydra"
    />
    <p className="absolute right-10 bottom-10 text-right">
      Hydra&apos;s representation of head regeneration through UI
      <br />
      <br />
      <a href="/files/hydra.zip">Download script (zip 2.9 KB)</a>
    </p>
  </div>
);
