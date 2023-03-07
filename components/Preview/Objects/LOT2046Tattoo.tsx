import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";
import { useHeader, useListItems } from "@/stores/index";

export const LOT2046Tattoo: React.FC = () => {
  const { resetScheme, setScheme } = useHeader();

  const { selectedWorkId } = useListItems();

  React.useEffect(() => {
    setScheme({
      bg: "black",
      text: "white",
    });

    return () => {
      resetScheme();
    };
  }, [resetScheme, selectedWorkId, setScheme]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
      <div className="w-full">
        <UploadcareImage
          alt="Side view"
          src="https://ucarecdn.com/58007ddf-42d7-4892-b431-713538b95b93/"
        />
      </div>
      <div className="absolute">
        <WorkDetails>
          <p className="text-xl font-bold uppercase text-white">
            Tattoo machine which I&#39;ve built from{" "}
            <a className="font-black" href="https://www.lot2046.com/">
              LOT 2046
            </a>{" "}
            products: hair trimmer and toothbrush
          </p>
        </WorkDetails>
      </div>
    </div>
  );
};
