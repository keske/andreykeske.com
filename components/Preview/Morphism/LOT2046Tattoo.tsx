import React from "react";

import { UploadcareImage, WorkDetails } from "@/components";

export const LOT2046Tattoo: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-20">
    <div className="w-5/6 lg:w-5/6 xl:w-5/6 2xl:w-4/6">
      <UploadcareImage
        alt="Side view"
        src="https://ucarecdn.com/58007ddf-42d7-4892-b431-713538b95b93/"
      />
    </div>
    <div className="absolute bottom-10 w-1/2">
      <WorkDetails>
        <div className="flex flex-col items-center gap-2">
          <h3>LOT2046 Tattoo Machine</h3>
          <small>
            Tattoo machine which I&#39;ve built from{" "}
            <a className="font-black" href="https://www.lot2046.com/">
              LOT 2046
            </a>{" "}
            products: hair trimmer and toothbrush
          </small>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
