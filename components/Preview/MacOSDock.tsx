import React from "react";

import { UploadcareImage } from "@/components/index";

export const MacOSDock: React.FC = () => (
  <div className="flex h-screen flex-col justify-center gap-40">
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
