import * as R from "ramda";
import React from "react";

import type { NextPage } from "next";

import { Head } from "@/components";
import { useResponsive } from "@/hooks";
import { Loading } from "@/packages/ui-kit";

const Home: NextPage = () => {
  const isMobile = useResponsive();

  const [Component, setComponent] =
    React.useState<React.ReactElement | null>(null);

  React.useEffect(() => {
    (async () => {
      if (R.not(R.isNil(isMobile))) {
        if (isMobile) {
          const Mobile = (await import("../components/Mobile/Mobile"))
            .default;

          setComponent(<Mobile />);
        } else {
          const Desktop = (
            await import("../components/Desktop/Desktop")
          ).default;

          setComponent(<Desktop />);
        }
      }
    })();
  }, [isMobile]);

  return (
    <>
      <Head />
      {Component || <Loading />}
    </>
  );
};

export default Home;
