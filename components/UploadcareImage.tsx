import * as R from "ramda";
import React from "react";

type Props = {
  alt: string;
  format?: "jpeg" | "png";
  progressive?: "no" | "yes";
  quality?: "lightest" | "normal";
  src: string;
};

const UploadcareImage: React.FC<Props> = ({
  alt,
  format = "jpeg",
  progressive = "no",
  quality = "normal",
  src,
}) => (
  <img
    alt={alt}
    className="w-full"
    src={R.join("", [
      src,
      `-/format/${format}/`,
      `-/progressive/${progressive}/`,
      `-/quality/${quality}/`,
    ])}
  />
);

export default UploadcareImage;
