import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const Sneakers: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-10">
    <div className="w-1/2">
      <UploadcareImage
        alt="Nike Dunk x Adidas Superstar"
        src="https://ucarecdn.com/1bb81a7a-6640-4ff2-a62a-33279b4a7e94/"
      />
    </div>
    <WorkDetails>
      <p>
        I took the popular model of both brands — Nike Dunk and Adidas Superstar
        — and crossed them.
      </p>
    </WorkDetails>
  </div>
);
