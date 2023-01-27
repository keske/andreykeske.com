import React from "react";

import { WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const VintageGoogleStreetView: React.FC<Props> = ({
  selectedCaseId,
}) => (
  <div className="h-screen w-screen">
    <iframe
      className="h-screen w-screen border-0"
      src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
      style={{
        filter: "sepia(1)",
      }}
      title="Vintage Google StreetView"
    />
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>Black and white with sepia like old photo card</p>
    </WorkDescription>
  </div>
);
