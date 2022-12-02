import React from "react";

type Props = {
  isShowing: boolean;
  onClick: () => void;
};

const CloseButton: React.FC<Props> = ({ isShowing, onClick }) =>
  isShowing ? (
    <div className="fixed top-5 right-5 cursor-pointer" onClick={onClick}>
      Close
    </div>
  ) : null;

export default CloseButton;
