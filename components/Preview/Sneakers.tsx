import React from "react";

import { UploadcareImage } from "@/components/index";

export const Sneakers: React.FC = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="w-1/3">
      <UploadcareImage
        alt="Nike Dunk x Adidas Superstar"
        src="https://ucarecdn.com/1bb81a7a-6640-4ff2-a62a-33279b4a7e94/"
      />
    </div>
    <p className="absolute right-10 bottom-10">
      I took the popular model of both brands — Nike Dunk and Adidas Superstar —
      and crossed them.
    </p>
  </div>
);
