import React from "react";

import { UploadcareImage } from "@/components/index";

export const Stickers = () => (
  <div className="flex flex-col gap-40">
    <div className="flex flex-col items-center gap-2 pb-40">
      <div className="w-1/3 text-center">
        <p>
          <strong>Football fans trolling</strong>
        </p>
        <p>
          I took several emblems of my native football clubs and deliberately
          mingled their colors between them.
        </p>
        <p>
          Maybe one of those truly bullies catch a glimpse of my sticker on a
          wall and dump his jaw on a sidewalk in bewilderment, at least I hope
          so.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="w-1/3">
          <UploadcareImage
            alt="Football fans trolling #1"
            src="https://ucarecdn.com/d5da363b-c885-4849-8e09-73f5285830cf/"
          />
        </div>
        <div className="w-1/3">
          <UploadcareImage
            alt="Football fans trolling #2"
            src="https://ucarecdn.com/acda9cb3-8281-4b2a-a87f-9eb810b032c5/"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="w-1/3">
          <UploadcareImage
            alt="Football fans trolling #3"
            src="https://ucarecdn.com/5aa369c4-04e6-4ef1-8f2c-1915da9e5ca6/"
          />
        </div>
        <div className="w-1/3">
          <UploadcareImage
            alt="Football fans trolling #4"
            src="https://ucarecdn.com/a3420d12-c0a4-4efa-a2e4-1c72160f62b2/"
          />
        </div>
      </div>
    </div>
  </div>
);
