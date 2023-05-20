import React from "react";

import { NURBS } from "@/components/index";
import { useNSControlPoints } from "@/hooks/index";

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
