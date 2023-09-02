import React from "react";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
