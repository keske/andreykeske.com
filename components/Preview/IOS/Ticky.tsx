import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const Ticky: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-10 pt-40 pb-20">
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
      <UploadcareImage
        alt="Side view"
        src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
      />
    </div>
    <WorkDetails>
      <p>
        Ticky is an application that shows the current time (or selected
        timezone&rsquo;s time) through the notification badge.
        <br />
        <br />
        <small>Soon on the AppStore</small>
      </p>
    </WorkDetails>
  </div>
);
