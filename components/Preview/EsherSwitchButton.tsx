import React from "react";

import { UploadcareImage, WorkDescription } from "@/components/index";

type Props = {
  selectedCaseId?: string | null;
};

export const EsherSwitchButton: React.FC<Props> = ({ selectedCaseId }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <UploadcareImage
        alt="Esher Switch Button"
        src="https://ucarecdn.com/520d81d0-1ee7-45df-9171-30416d96a94d/"
      />
    </div>
    <WorkDescription selectedCaseId={selectedCaseId}>
      <div className="flex flex-col items-end">
        <strong>Inspiration</strong>
        <div className="mt-4 w-1/4">
          <figure>
            <UploadcareImage
              alt="Esher Switch Button"
              src="https://ucarecdn.com/2800b37e-8afc-4ee4-aa38-3c9e8d36f968/"
            />
            <figcaption>
              <cite>
                <a
                  className="text-xs"
                  href="https://en.wikipedia.org/wiki/Sky_and_Water_I"
                >
                  Sky and Water I. M C. Escher
                </a>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </WorkDescription>
  </div>
);
