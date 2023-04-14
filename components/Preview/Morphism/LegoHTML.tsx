import React from "react";

import { WorkDetails } from "@/components/index";

type ButtonProps = {
  backgroundColor: string;
};

const Button: React.FC<ButtonProps> = ({ backgroundColor }) => (
  <button
    className="flex flex-row flex-wrap rounded-2xl border-none px-4 py-2"
    style={{
      backgroundColor,
    }}
    type="button"
  >
    {[...Array(8)].map((index) => (
      <span className={`w-1/4`} key={index}>
        <input checked className="form-radio" type="radio" />
      </span>
    ))}
  </button>
);

export const LegoHTML: React.FC = () => (
  <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-5">
    <Button backgroundColor="#F3C305" />
    <div className="absolute bottom-10 w-1/2">
      <WorkDetails>
        <div className="flex flex-col items-center gap-2">
          <h3>Lego HTML Element</h3>
          <small className="text-center">
            A classical Lego brick except that this one was made from HTML
            elements button and input
          </small>
          <time dateTime="2021">2021</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
