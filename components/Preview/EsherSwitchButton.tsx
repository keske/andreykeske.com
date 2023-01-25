import React from "react";

import { UploadcareImage } from "@/components/index";

export const EsherSwitchButton = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
    <div className="md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <UploadcareImage
        alt="Esher Switch Button"
        src="https://ucarecdn.com/520d81d0-1ee7-45df-9171-30416d96a94d/"
      />
    </div>
    <p className="fixed right-10 bottom-10 flex flex-col items-end">
      <strong>Inspiration</strong>
      <br />
      <a
        className="text-sm"
        href="https://en.wikipedia.org/wiki/Sky_and_Water_I"
      >
        Sky and Water I. M C. Escher
      </a>
      <div className="mt-4 w-1/4">
        <UploadcareImage
          alt="Esher Switch Button"
          src="https://ucarecdn.com/2800b37e-8afc-4ee4-aa38-3c9e8d36f968/"
        />
      </div>
    </p>
  </div>
);
