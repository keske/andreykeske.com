import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const TimestampTattoo: React.FC = () => (
  <div className="flex flex-col items-center gap-10">
    <div className="xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5">
      <UploadcareImage
        alt="Timestamp Tattoo"
        src="https://ucarecdn.com/6895ff34-0b17-46c8-8109-4ed571387cd0/"
      />
    </div>
    <WorkDetails>
      <p>
        There are two timestamp tattoos one on the neck{" "}
        <mark>1662414749388</mark> and the other one on the leg
        <mark>1662414749387</mark> with a slight difference between them,
        <br />
        I&apos;m going to quote Carlo Rovelli:
        <q cite="https://www.goodreads.com/book/show/36442813-the-order-of-time">
          <br />
          ...With the timepieces of specialized laboratories, this slowing down
          of time can be detected between levels just a few centimeters apart: a
          clock placed on the floor runs a little more slowly than one on a
          table...
        </q>
      </p>
    </WorkDetails>
  </div>
);
