import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const IOSTicky: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-20 pt-56 pb-20">
    <div className="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/5">
      <UploadcareImage
        alt="Side view"
        src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
      />
    </div>
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
