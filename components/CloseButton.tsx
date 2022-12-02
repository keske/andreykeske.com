import React from "react";

type Props = {
  isShowing: boolean;
  onClick: () => void;
};

const CloseButton: React.FC<Props> = ({ isShowing, onClick }) =>
  isShowing ? (
    <div className="fixed top-10 right-10 cursor-pointer" onClick={onClick}>
      Close
    </div>
  ) : null;

export default CloseButton;
