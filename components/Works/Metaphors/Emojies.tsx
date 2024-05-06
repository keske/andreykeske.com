import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const Emojies: React.FC = () => (
  <div className="flex flex-col items-center gap-20 pb-20 pt-56">
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <img
            alt="Emoji Tattoo #1"
            src="/images/emojies-tattoos/tattoo-1.png"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <img
            alt="Emoji Tattoo #2"
            src="/images/emojies-tattoos/tattoo-2.png"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <img
            alt="Emoji Tattoo #3"
            src="/images/emojies-tattoos/tattoo-3.png"
          />
        </div>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5">
          <img
            alt="Emoji Tattoo #4"
            src="/images/emojies-tattoos/tattoo-4.png"
          />
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col items-center gap-2">
          <h3>Emojies with Emojies Tattoos</h3>
          <time dateTime="2023">2023</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
        <UploadcareImage
          alt="Emojis from behind"
          src="https://ucarecdn.com/f73ebc4a-f1bf-434c-b5b6-f9a8383b82f6/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col items-center gap-2">
          <h3>Emojis from behind</h3>
          <time dateTime="2018">2018</time>
        </div>
      </WorkDetails>
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
      <WorkDetails>
        <div className="flex w-1/2 flex-col items-center gap-2">
          <h3>Emoji Tattoo Flashes</h3>
          <time dateTime="2017">2017</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/2 lg:w-full xl:w-full">
        <UploadcareImage
          alt="Rolling Stones Emoji Logotype"
          src="https://ucarecdn.com/eea10eaa-ea87-4ecd-ae78-9de9e11b54e9/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-full flex-col items-center gap-2">
          <h3>Rolling Stones Emoji Logotype</h3>
          <time dateTime="2017">2017</time>
        </div>
      </WorkDetails>
    </div>

    <div className="flex flex-col items-center gap-5">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2">
        <UploadcareImage
          alt="Pinhead"
          src="https://ucarecdn.com/2a274270-dffd-4b9e-a7ea-72cd7616727c/"
        />
      </div>
      <WorkDetails>
        <div className="flex w-full flex-col items-center gap-2">
          <h3>Pinhead</h3>
          <time dateTime="2016">2016</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
