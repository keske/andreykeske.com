import dynamic from "next/dynamic";
import React from "react";

import type { NextPage } from "next";

import { Head } from "@/components/index";

const Mobile = dynamic(() => import("../components/Mobile"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window?.innerWidth <= 768);

    function handleResize() {
      setIsMobile(window?.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head />
      {isMobile && <Mobile />}
      <main></main>
    </>
  );
};

export default Home;
