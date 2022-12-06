import React from "react";

import { UploadcareImage } from "@/components/index";

const TickyApplication = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
    <div className="w-1/5">
      <UploadcareImage
        alt="Side view"
        src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
      />
    </div>
    <p className="absolute right-10 bottom-10 w-1/5 text-right">
      Ticky is an application that shows the current time (or selected
      timezone&rsquo;s time) through the notification badge.
      <br />
      <br />
      Soon on the AppStore
    </p>
  </div>
);

export default TickyApplication;
