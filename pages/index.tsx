import Head from "next/head";
import React from "react";

import type { NextPage } from "next";

import {
  ViewModeDetails,
  ViewModeList,
  // ViewModeToggle,
} from "@/components/index";
import { useViewMode } from "@/stores/index";

const Home: NextPage = () => {
  const { viewMode } = useViewMode();

  const content = React.useMemo(
    () => (viewMode === "detail" ? <ViewModeDetails /> : <ViewModeList />),
    [viewMode],
  );

  return (
    <>
      <Head>
        <title>Andrey Keske</title>
      </Head>
      {/* <ViewModeToggle /> */}
      {content}
    </>
  );
};

export default Home;
