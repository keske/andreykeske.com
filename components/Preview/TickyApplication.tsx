import React from "react";

import { UploadcareImage, WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const TickyApplication: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5">
      <UploadcareImage
        alt="Side view"
        src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
      />
    </div>
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>
        Ticky is an application that shows the current time (or selected
        timezone&rsquo;s time) through the notification badge.
        <br />
        <br />
        <small>Soon on the AppStore</small>
      </p>
    </WorkDescription>
  </div>
);
