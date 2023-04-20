import React from "react";

type Props = {
  isLoading?: boolean;
};

export const Loading: React.FC<Props> = ({ isLoading = true }) =>
  isLoading ? <div className="fixed bottom-10 right-10 z-50">🐌</div> : null;
