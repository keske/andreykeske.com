import React from "react";

import { UploadcareImage } from "@/components/index";

const EsherSwitchButton = () => (
  <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center">
    <div className="w-1/3">
      <UploadcareImage
        alt="Esher Switch Button"
        src="https://ucarecdn.com/520d81d0-1ee7-45df-9171-30416d96a94d/"
      />
    </div>
    <p className="fixed right-10 bottom-10 text-right">
      <strong>Inspiration</strong>
      <br />
      Sky and Water I. M
      <br />
      C. Escher. 1938
      <br />
      <a href="https://en.wikipedia.org/wiki/Sky_and_Water_I">
        wiki
        <sup>↗</sup>
      </a>
    </p>
  </div>
);

export default EsherSwitchButton;
