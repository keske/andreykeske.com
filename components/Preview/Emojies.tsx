import React from "react";

import { UploadcareImage } from "@/components/index";

export const Emojies: React.FC = () => (
  <div className="flex flex-col gap-40 py-80">
    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
        <UploadcareImage
          alt="Emojis from behind"
          src="https://ucarecdn.com/f73ebc4a-f1bf-434c-b5b6-f9a8383b82f6/"
        />
      </div>
      <p>Emojis from behind</p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <UploadcareImage
            alt="Emoji Tattoo Flashes #1"
            src="https://ucarecdn.com/68e01be8-2b39-40dd-b01e-376f79afdb83/"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <UploadcareImage
            alt="Emoji Tattoo Flashes #2"
            src="https://ucarecdn.com/ec833e03-ddce-469a-bcf3-949fa043a025/"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <UploadcareImage
            alt="Emoji Tattoo Flashes #3"
            src="https://ucarecdn.com/a8572a03-5dc2-48f5-9a6e-bfb3fabc35ab/"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <UploadcareImage
            alt="Emoji Tattoo Flashes #4"
            src="https://ucarecdn.com/75a9fed1-642f-4e85-8ddb-987832341d51/"
          />
        </div>
      </div>
      <p>Emoji Tattoo Flashes</p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
        <UploadcareImage
          alt="Rolling Stones Emoji Logotype"
          src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/"
        />
      </div>
      <p>Rolling Stones Emoji Logotype</p>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
        <UploadcareImage
          alt="Pinhead"
          src="https://ucarecdn.com/2a274270-dffd-4b9e-a7ea-72cd7616727c/"
        />
      </div>
      <p>Pinhead</p>
    </div>
  </div>
);
