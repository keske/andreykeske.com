import React from "react";

type Props = {
  isShowing: boolean;
  onClick: () => void;
};

export const CloseButton: React.FC<Props> = ({ isShowing, onClick }) => {
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClick();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClick]);

  if (!isShowing) {
    return null;
  }

  return (
    <div className="fixed top-10 right-10 cursor-pointer" onClick={onClick}>
      Close
    </div>
  );
};
