import Head from "next/head";
import React from "react";

import type { NextPage } from "next";

import { List } from "@/components/index";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Andrey Keske</title>
    </Head>
    <List />
  </>
);

export default Home;
