import React from "react";

import { UploadcareImage, WorkDetails } from "@/components";

export const Sneakers: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-20">
    <div className="w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/3">
      <UploadcareImage
        alt="Nike Dunk x Adidas Superstar"
        src="https://ucarecdn.com/1bb81a7a-6640-4ff2-a62a-33279b4a7e94/"
      />
    </div>
    <div className="absolute bottom-10 w-1/2">
      <WorkDetails>
        <div className="flex flex-col items-center gap-2">
          <h3>Sneakers</h3>
          <small className="text-center">
            I took the popular model of both brands — Nike Dunk and
            Adidas Superstar — and crossed them.
          </small>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
