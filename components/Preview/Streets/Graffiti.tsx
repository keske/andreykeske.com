import React from "react";

import { Wall, WorkDetails } from "@/components/index";

const peaces = [
  "Keske, Kaze, 2007",
  "Keske, Kaze, 2007",
  "Keske, Kaze, 2007",
  "Keske, Kaze, 2007",
  "Kaze (Aru), Keske, 2007",
  "Keske, Zebo (Bird), 2010",
  "Keske, 2007",
  "Keske (Skull and right thing), Kaze, 2007",
  "Keske, Kaze (Aru), 2009",
  "Keske, Keske, 2009",
  "Ksenia, Keske, 2009",
  "Keske, 2009",
  "Keske, 2009",
  "Kaze, Keske, 2007",
  "Ksenia, Keske, 2009",
];

export const Graffiti = () => (
  <div className="flex flex-col gap-20">
    <div className="flex flex-col">
      <div className="h-screen w-screen">
        <Wall />
      </div>
      <WorkDetails>
        <div className="-mt-28 flex w-full flex-col items-center gap-2 pb-20">
          {peaces.map((peace, index) => (
            <div
              className="flex w-1/3 flex-col gap-1 sm:w-full sm:p-10 md:w-full lg:w-4/6"
              key={index}
            >
              <img
                alt={peace}
                className="w-full"
                src={`/photos/graffiti/${index}.jpg`}
              />
              <p className="text-black dark:text-white">
                {peace},{" "}
                <span className="opacity-30">Yekaterinburg, Russia</span>
              </p>
            </div>
          ))}
        </div>
      </WorkDetails>
    </div>
  </div>
);
