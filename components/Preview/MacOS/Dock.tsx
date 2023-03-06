import React from "react";

import { UploadcareImage } from "@/components/index";

export const Dock: React.FC = () => (
  <div className="flex flex-col justify-center gap-40 py-60">
    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-screen md:w-screen lg:w-5/6 xl:w-1/2">
        <UploadcareImage
          alt="Dock Recycle Bins"
          src="https://ucarecdn.com/a7680ff9-2c6b-4f5a-9fb8-13093b149933/"
        />
      </div>
      <p>
        Recycle Bins<time dateTime="2021">2021</time>
      </p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/ball.mp4"
          title="Ball in the Dock"
        />
      </div>
      <p>
        Ball<time dateTime="2014">2014</time>
      </p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="aspect-w-16 aspect-h-4 w-1/2">
        <iframe
          allow="loop"
          className="border-0"
          src="/videos/catch.mp4"
          title="The Catch"
        />
      </div>
      <p className="text-center">
        The Catch<time dateTime="2013">2013</time>
        <br />
        <small>
          The application icon in the dock is a trap from the Ghostbusters
          <br />
          The window is a ghost. Window minimization represents a scene from the
          movie of catching a ghost
          <br />
          Thanks: Andrey Smirny and Nikita Rokotyan
        </small>
      </p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-screen md:w-screen lg:w-5/6 xl:w-1/2">
        <UploadcareImage
          alt="Friday Dock"
          src="https://ucarecdn.com/ca75b791-72ea-4be3-a779-6a75f6eb43d8/"
        />
      </div>
      <p>
        Friday Dock
        <time dateTime="2011">2011</time>
      </p>
    </div>
  </div>
);
