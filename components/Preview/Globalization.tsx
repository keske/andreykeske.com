import React from "react";

import { WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const Globalization: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="h-screen w-screen">
    <iframe
      className="h-screen w-screen border-0"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55207280.68936508!2d-17.645922980156378!3d32.37667657045178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1451573511029"
      style={{
        filter: "blur(13px)",
      }}
      title="Globalization"
    />
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>The world when the boundaries are blurred</p>
    </WorkDescription>
  </div>
);
