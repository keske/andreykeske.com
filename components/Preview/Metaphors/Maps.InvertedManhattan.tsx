import React from "react";

import { UploadcareImage } from "@/components/index";

export const MapsInvertedManhattan: React.FC = () => (
  <div className="flex min-h-screen w-screen items-center justify-center">
    <div className="w-1/2 lg:w-1/3 xl:w-1/4">
      <UploadcareImage
        alt="Manhattan"
        src="https://ucarecdn.com/287536f5-7822-497f-ab92-9363e935791f/"
      />
    </div>
  </div>
);
