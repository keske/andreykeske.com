import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const MacOSDock: React.FC = () => (
  <div className="flex flex-col gap-20 pt-56 pb-20">
    <div className="flex w-screen flex-col items-center gap-5">
      <div className="sm:w-screen md:w-screen lg:w-5/6 xl:w-5/6">
        <UploadcareImage
          alt="Dock Recycle Bins"
          src="https://ucarecdn.com/a7680ff9-2c6b-4f5a-9fb8-13093b149933/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Dock Recycle Bins</h3>
          <time dateTime="2021">2021</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              allow="autoplay"
              className="absolute top-0 left-0 h-full w-full"
              src="/videos/ball.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Ball</h3>
          <time dateTime="2013">2013</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex w-screen flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              allow="autoplay"
              className="absolute top-0 left-0 h-full w-full"
              src="/videos/catch.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>The Catch</h3>
          <small>
            The application icon in the dock is a trap from the Ghostbusters
          </small>
          <small>
            The window is a ghost. Window minimization represents a scene from
            the movie of catching a ghost
          </small>
          <small>Thanks: Andrey Smirny and Nikita Rokotyan</small>
          <time dateTime="2013">2013</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-screen md:w-screen lg:w-5/6 xl:w-1/2">
        <UploadcareImage
          alt="Friday Dock"
          src="https://ucarecdn.com/ca75b791-72ea-4be3-a779-6a75f6eb43d8/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Friday Dock</h3>
          <time dateTime="2013">2013</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
