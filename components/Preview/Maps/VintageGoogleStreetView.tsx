import React from "react";

import { WorkDetails } from "@/components/index";
import { useHeader } from "@/stores/index";

export const VintageGoogleStreetView: React.FC = () => {
  const { setScheme } = useHeader();

  // React.useEffect(() => {
  //   setScheme({
  //     primary: "black",
  //     secondary: "white",
  //   });
  // }, [setScheme]);

  return (
    <div className="h-screen w-screen">
      <iframe
        className="h-screen w-screen border-0"
        src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
        style={{
          filter: "sepia(1)",
        }}
        title="Vintage Google StreetView"
      />
      <WorkDetails>
        <div className="absolute right-10 bottom-10">
          <p className="text-white">
            Black and white with sepia like old photo card
          </p>
        </div>
      </WorkDetails>
    </div>
  );
};
