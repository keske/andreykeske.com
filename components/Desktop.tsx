import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import { WorkList } from "./WorkList";

import type { NextPage } from "next";

import { CloseButton, Logo, Work } from "@/components/index";
import { useListItems } from "@/stores/index";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700", "800", "900"],
});

const Desktop: NextPage = () => {
  const router = useRouter();

  const [, startTransition] = React.useTransition();

  const { selectedWorkId, setSelectedWorkId } = useListItems();

  const [work, setWork] = React.useState<React.ReactElement<
    any,
    React.JSXElementConstructor<any> | string
  > | null>(null!);

  const handleShowWork = React.useCallback(
    (id: string) => {
      if (id === selectedWorkId || R.isNil(selectedWorkId)) {
        startTransition(() => {
          setSelectedWorkId(id);
        });
      }
    },
    [selectedWorkId, setSelectedWorkId],
  );

  const handleCloseWork = React.useCallback(() => {
    router.push("");

    setWork(null);
    setSelectedWorkId(null);
  }, [router, setSelectedWorkId]);

  const handleMouseOut = React.useCallback(() => {
    if (R.isNil(selectedWorkId)) {
      setWork(null);
    }
  }, [selectedWorkId]);

  const handleMouseOver = React.useCallback(
    (component: React.ReactElement<any, any>) => {
      if (R.isNil(selectedWorkId)) {
        setWork(component);
      }
    },
    [selectedWorkId],
  );

  // React.useEffect(() => {
  //   if (router.asPath !== "/") {
  //     const caseId = router.asPath.replace("/#", "");

  //     const { component } = R.find(
  //       R.propEq("id", router.asPath.replace("/#", "")),
  //     )(itemsWithId) as ItemWithID;

  //     setWork(component);
  //     setSelectedWorkId(caseId);
  //   }
  // }, [itemsWithId, router.asPath]);

  return (
    <div className={inter.className}>
      <Logo onClick={handleCloseWork} />
      <CloseButton
        isShowing={R.not(R.isNil(selectedWorkId))}
        onClick={handleCloseWork}
      />
      <Work>{work && React.cloneElement(work)}</Work>
      {/* <WorksList
        {...{
          handleCloseWork,
          handleMouseOut,
          handleMouseOver,
          handleShowWork,
        }}
      /> */}
      <WorkList
        {...{
          handleCloseWork,
          handleMouseOut,
          handleMouseOver,
          handleShowWork,
        }}
      />
    </div>
  );
};

export default Desktop;
