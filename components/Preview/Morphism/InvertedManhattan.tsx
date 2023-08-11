import React from "react";

import { UploadcareImage, WorkDetails } from "@/components";

export const InvertedManhattan: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-20">
    <div className="w-1/2 lg:w-1/3 xl:w-1/4">
      <UploadcareImage
        alt="Manhattan"
        src="https://ucarecdn.com/287536f5-7822-497f-ab92-9363e935791f/"
      />
    </div>
    <div className="absolute bottom-10 w-1/2">
      <WorkDetails>
        <div className="flex flex-col items-center gap-2">
          <h3>Inverted Manhattan</h3>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
