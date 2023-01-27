import React from "react";

import { UploadcareImage } from "@/components/index";

export const WaterFilter: React.FC = () => (
  <div className="w-screen py-40">
    <div className="flex flex-col items-center gap-10 p-20">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/4">
        <UploadcareImage
          alt="Water Filter"
          src="https://ucarecdn.com/2db57ca1-3de1-45aa-bb48-08c17eaa2433/"
        />
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/4">
        <UploadcareImage
          alt="Water Filter"
          src="https://ucarecdn.com/d9922bd6-54c3-49ca-aa12-dc371d09cbca/"
        />
      </div>
    </div>
    <p className="fixed right-10 bottom-10 text-right">
      Street installation
      <br />
      The water filter in an unusual situation
    </p>
  </div>
);
