import React from "react";

import { WorkTitle } from "@/components/index";

type WorkProps = React.PropsWithChildren;

export const Work: React.FC<WorkProps> = ({ children }) => (
  <>
    <WorkTitle />
    {children}
  </>
);
