import React from "react";

import { UploadcareImage, WorkDetails } from "@/components";

export const Stickers = () => (
  <div className="flex flex-col items-center gap-20 pb-20 pt-56">
    <div className="flex flex-col items-center gap-5">
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
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Football fans trolling</h3>
          <small>
            I took several emblems of my native football clubs and
            deliberately mingled their colors between them.
          </small>
          <small>
            Maybe one of those truly bullies catch a glimpse of my
            sticker on a wall and dump his jaw on a sidewalk in
            bewilderment, at least I hope so.
          </small>
          <time dateTime="2012">2012</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
