import React from "react";

import { UploadcareImage } from "@/components/index";

export const RollingStones: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3">
      <UploadcareImage
        alt="Rolling Stones Emoji Logotype"
        src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/"
      />
    </div>
  </div>
);
