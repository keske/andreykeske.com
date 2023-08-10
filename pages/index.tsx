import * as R from "ramda";
import React from "react";

import type { NextPage } from "next";

import {
  Head,
  Loading,
  // SegmentedControl
} from "@/components/index";

const Home: NextPage = () => {
  const [Component, setComponent] =
    React.useState<React.ReactElement | null>(null);

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

  React.useEffect(() => {
    (async () => {
      if (R.not(R.isNil(isMobile))) {
        if (isMobile) {
          const Mobile = (await import("../components/Mobile"))
            .default;

          setComponent(<Mobile />);
        } else {
          const Desktop = (await import("../components/Desktop"))
            .default;

          setComponent(<Desktop />);
        }
      }
    })();
  }, [isMobile]);

  return (
    <>
      <Head />
      {/* <SegmentedControl items={["Mac OS", "Minecraft"]} /> */}
      {Component || <Loading />}
    </>
  );
};

export default Home;
