import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import type { Item } from "@/stores/useListItems";
import type { NextPage } from "next";

import { Head, List, WorkPreview, WorkTitle } from "@/components/index";

import { Header } from "@/components/index";
import { useListItems } from "@/stores/index";

const Home: NextPage = () => {
  const router = useRouter();

  const { items } = useListItems();

  const itemsWithId = React.useMemo<Array<Item & { id: string }>>(
    () =>
      items.map((item) => ({
        ...item,
        id: item.title.toLocaleLowerCase().replace(/ /g, "-"),
      })),
    [items],
  );

  const [selectedCaseId, setSelectedCaseId] = React.useState<string | null>(
    null,
  );

  const [preview, setPreview] = React.useState<React.ReactNode>(null);

  const handleShowCase = React.useCallback(
    (id: string) => {
      if (id === selectedCaseId || R.isNil(selectedCaseId)) {
        setSelectedCaseId(id);
      }
    },
    [selectedCaseId],
  );

  const handleCloseCase = React.useCallback(() => {
    router.push("");

    setPreview(null);
    setSelectedCaseId(null);
  }, [router]);

  const handleMouseOut = React.useCallback(() => {
    if (R.isNil(selectedCaseId)) {
      setPreview(null);
    }
  }, [selectedCaseId]);

  const handleMouseOver = React.useCallback(
    (component: React.ReactNode) => {
      if (R.isNil(selectedCaseId)) {
        setPreview(component);
      }
    },
    [selectedCaseId],
  );

  // React.useEffect(() => {
  //   if (router.asPath !== "/") {
  //     const caseId = router.asPath.replace("/#", "");

  //     const { component } = R.find(
  //       R.propEq("id", router.asPath.replace("/#", "")),
  //     )(itemsWithId) as ItemWithID;

  //     setPreview(component);
  //     setSelectedCaseId(caseId);
  //   }
  // }, [itemsWithId, router.asPath]);

  return (
    <>
      <Head />
      <Header
        {...{
          handleCloseCase,
          selectedCaseId,
        }}
      />
      <main>
        <WorkTitle {...{ itemsWithId, selectedCaseId }} />
        <WorkPreview {...{ preview, selectedCaseId }} />
        <List
          {...{
            handleCloseCase,
            handleMouseOut,
            handleMouseOver,
            handleShowCase,
            itemsWithId,
            selectedCaseId,
          }}
        />
      </main>
    </>
  );
};

export default Home;
