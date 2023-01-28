import React from "react";

import { UploadcareImage, WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const Sneakers: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="w-1/2">
      <UploadcareImage
        alt="Nike Dunk x Adidas Superstar"
        src="https://ucarecdn.com/1bb81a7a-6640-4ff2-a62a-33279b4a7e94/"
      />
    </div>
    <WorkDescription selectedCaseId={selectedCaseId}>
      <p>
        I took the popular model of both brands — Nike Dunk and Adidas Superstar
        — and crossed them.
      </p>
    </WorkDescription>
  </div>
);
