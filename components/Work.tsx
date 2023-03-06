import { Transition } from "@headlessui/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { WorkTitle } from "@/components/index";
import { useListItems } from "@/stores/index";

type WorkProps = React.PropsWithChildren & {};

export const Work: React.FC<WorkProps> = ({ children }) => {
  const { selectedWorkId, works } = useListItems();

  return (
    <>
      <WorkTitle />
      {children}
    </>
  );
};
