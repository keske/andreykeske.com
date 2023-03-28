import React from "react";

type Props = {
  isFetching: boolean;
};

export const Loading: React.FC<Props> = ({ isFetching }) =>
  isFetching ? <div className="fixed right-10 bottom-10 z-50">🐌</div> : null;
