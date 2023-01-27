import React from "react";

import { UploadcareImage } from "@/components/index";

export const EmojiTattooFlashes: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center gap-2">
    <div className="w-1/5">
      <UploadcareImage
        alt="Emoji Tattoo Flashes #1"
        src="https://ucarecdn.com/68e01be8-2b39-40dd-b01e-376f79afdb83/"
      />
    </div>
    <div className="w-1/5">
      <UploadcareImage
        alt="Emoji Tattoo Flashes #2"
        src="https://ucarecdn.com/ec833e03-ddce-469a-bcf3-949fa043a025/"
      />
    </div>
    <div className="w-1/5">
      <UploadcareImage
        alt="Emoji Tattoo Flashes #3"
        src="https://ucarecdn.com/a8572a03-5dc2-48f5-9a6e-bfb3fabc35ab/"
      />
    </div>
    <div className="w-1/5">
      <UploadcareImage
        alt="Emoji Tattoo Flashes #4"
        src="https://ucarecdn.com/75a9fed1-642f-4e85-8ddb-987832341d51/"
      />
    </div>
  </div>
);
