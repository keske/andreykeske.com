import React from "react";

import { NURBS } from "@/components";
import { useNSControlPoints } from "@/hooks";

type NURBSLetterProps = {
  url: string;
  warpRatio: number;
};

export const NURBSLetter: React.FC<NURBSLetterProps> = ({
  url,
  warpRatio,
}) => {
  const nsControlPoints = useNSControlPoints(warpRatio);

  return <NURBS nsControlPoints={nsControlPoints} url={url} />;
};
