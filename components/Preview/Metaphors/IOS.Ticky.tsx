import React from "react";

import { WorkDetails } from "@/components/index";

export const IOSTicky: React.FC = () => (
  <div className="flex flex-col items-center gap-20 pb-20 pt-56">
    <img
      alt="Side view"
      className="sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4 2xl:w-1/6"
      src="/images/ticky/ticky.png"
    />
    <WorkDetails>
      <div className="flex w-1/2 flex-col gap-2">
        <h3>Ticky</h3>
        <small>
          Ticky is an application that shows the current time (or selected
          timezone&rsquo;s time) through the notification badge.
        </small>
        <small>
          <i>Soon on the AppStore</i>
        </small>
        <time dateTime="2021">2021</time>
      </div>
    </WorkDetails>
  </div>
);
