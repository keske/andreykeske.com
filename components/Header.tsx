import * as R from "ramda";
import React from "react";

import { CloseButton, Logo } from "@/components/index";

type HeaderProps = {
  handleCloseCase: () => void;
  selectedCaseId: string | null;
};

export const Header: React.FC<HeaderProps> = ({
  handleCloseCase,
  selectedCaseId,
}) => (
  <>
    <header className="fixed top-10 z-50 flex w-full justify-between px-10">
      <Logo onClick={handleCloseCase} />
      <CloseButton
        isShowing={R.not(R.isNil(selectedCaseId))}
        onClick={handleCloseCase}
      />
    </header>
  </>
);
