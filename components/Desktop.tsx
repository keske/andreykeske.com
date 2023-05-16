import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import type { NextPage } from "next";

import {
  Button,
  CloseButton,
  DistortButton,
  DistortSurface,
  Logo,
  Work,
  WorkList,
} from "@/components/index";
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
      <WorkList
        {...{
          handleCloseWork,
          handleMouseOut,
          handleMouseOver,
          handleShowWork,
        }}
      />
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
        {/* <DistortButton onClick={() => {}} size="lg">
          LG Button here
        </DistortButton>
        <DistortButton onClick={() => {}} size="lg">
          MAPS
        </DistortButton> */}

        {/* <DistortButton size="md">Download</DistortButton>
        <DistortButton size="md">Abcdefgh</DistortButton>
        <DistortButton size="sm">Download</DistortButton>
        <DistortButton size="xs">Crumpled Newspaper</DistortButton>
        <DistortButton size="xs">Maps</DistortButton> */}

        <>
          <Button size="lg">Hey</Button>
          <Button size="md">Hey</Button>
          <Button size="sm">Hey</Button>
          <Button size="xs">Hey</Button>
        </>
        <>
          <DistortSurface size="lg">Button</DistortSurface>
          <DistortSurface size="md">Button</DistortSurface>
          <DistortSurface size="sm">Button</DistortSurface>
          <DistortSurface size="xs">Button</DistortSurface>
        </>
      </div>
    </div>
  );
};

export default Desktop;
