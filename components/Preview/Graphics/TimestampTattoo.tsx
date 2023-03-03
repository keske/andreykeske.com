import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const TimestampTattoo: React.FC = () => (
  <div className="flex flex-col items-center gap-10 pt-80 pb-20">
    <div className="sm:w-1/2 md:w-1/2 lg:w-1/5">
      <UploadcareImage
        alt="Timestamp Tattoo"
        src="https://ucarecdn.com/6895ff34-0b17-46c8-8109-4ed571387cd0/"
      />
    </div>
    <WorkDetails>
      <div className="xs:w-1/2 flex flex-col gap-5 sm:w-1/2 md:w-1/2 lg:w-1/3">
        <p>
          There are two timestamp tattoos one on the neck{" "}
          <mark>1662414749388</mark> and the other one on the leg
          <mark>1662414749387</mark> with a slight difference between them,
        </p>
        <p>I&apos;m going to quote Carlo Rovelli:</p>
        <q cite="https://www.goodreads.com/book/show/36442813-the-order-of-time">
          ...With the timepieces of specialized laboratories, this slowing down
          of time can be detected between levels just a few centimeters apart: a
          clock placed on the floor runs a little more slowly than one on a
          table...
        </q>
      </div>
    </WorkDetails>
  </div>
);
