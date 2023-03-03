import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import type { NextPage } from "next";

import {
  CloseButton,
  Head,
  List,
  Logo,
  WorkPreview,
  WorkTitle,
} from "@/components/index";
import { useListItems } from "@/stores/index";

const Home: NextPage = () => {
  const router = useRouter();

  const { selectedCaseId, setSelectedCaseId } = useListItems();

  const [preview, setPreview] = React.useState<React.ReactNode>(null);

  const handleShowCase = React.useCallback(
    (id: string) => {
      if (id === selectedCaseId || R.isNil(selectedCaseId)) {
        setSelectedCaseId(id);
      }
    },
    [selectedCaseId, setSelectedCaseId],
  );

  const handleCloseCase = React.useCallback(() => {
    router.push("");

    setPreview(null);
    setSelectedCaseId(null);
  }, [router, setSelectedCaseId]);

  const handleMouseOut = React.useCallback(() => {
    if (R.isNil(selectedCaseId)) {
      setPreview(null);
    }
  }, [selectedCaseId]);

  const handleMouseOver = React.useCallback(
    (component: React.ReactElement<any, any>) => {
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
      <Logo onClick={handleCloseCase} />
      <CloseButton
        isShowing={R.not(R.isNil(selectedCaseId))}
        onClick={handleCloseCase}
      />
      <main>
        <WorkTitle />
        <WorkPreview {...{ preview }} />
        <List
          {...{
            handleCloseCase,
            handleMouseOut,
            handleMouseOver,
            handleShowCase,
          }}
        />
      </main>
    </>
  );
};

export default Home;
