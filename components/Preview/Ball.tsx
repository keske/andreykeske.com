import React from "react";

export const Ball: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <iframe
      allow="loop"
      className="h-screen w-1/2 border-0"
      src="/videos/ball.mp4"
      title="Ball in the Dock"
    />
  </div>
);
