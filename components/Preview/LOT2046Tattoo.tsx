import React from "react";

import { UploadcareImage } from "@/components/index";

const LOT2046Tattoo = () => (
  <div className="absolute top-0 left-0 h-screen w-screen bg-black">
    <div className="flex flex-row justify-center">
      <div className="w-5/12">
        <UploadcareImage
          alt="Side view"
          src="https://ucarecdn.com/58007ddf-42d7-4892-b431-713538b95b93/"
        />
      </div>
      <div className="w-3/12">
        <UploadcareImage
          alt="Up view"
          src="https://ucarecdn.com/a9e460fb-b621-4e60-9201-06c981ef4d68/"
        />
      </div>
    </div>
    {/* <UploadcareImage
      alt="some"
      format="png"
      src="https://ucarecdn.com/74eebc30-354a-4b5d-86f0-9a45bd74c230/"
    />
    <UploadcareImage
      alt="some"
      format="png"
      src="https://ucarecdn.com/f1615601-6fc7-4d05-bdfb-ee78632d451a/"
    /> */}
  </div>
);

export default LOT2046Tattoo;
