import React from "react";

const SoftVideoPlayer = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen justify-center">
    <iframe
      className="h-screen w-screen border-0"
      src="http://localhost:3001/examples/soft-ui/examples/soft-player/index.html"
      title="Soft Video Player"
    />
  </div>
);

export default SoftVideoPlayer;
