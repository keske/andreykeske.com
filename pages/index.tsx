import React from "react";

import type { NextPage } from "next";

import { Head, List, Logo } from "@/components/index";

const Home: NextPage = () => (
  <>
    <Head />
    <header>
      <Logo />
    </header>
    <main>
      <List />
    </main>
  </>
);

export default Home;
