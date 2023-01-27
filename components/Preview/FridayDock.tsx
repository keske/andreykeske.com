import React from "react";

import { UploadcareImage } from "@/components/index";

export const FridayDock: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
      <UploadcareImage
        alt="Mac OS Dock"
        src="https://ucarecdn.com/ca75b791-72ea-4be3-a779-6a75f6eb43d8/"
      />
    </div>
  </div>
);
