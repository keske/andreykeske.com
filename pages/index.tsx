import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import type { NextPage } from "next";

import { CloseButton, Head, Logo, Work, WorkList } from "@/components/index";
import { useListItems } from "@/stores/index";

const Home: NextPage = () => {
  const router = useRouter();

  const { selectedWorkId, setSelectedWorkId } = useListItems();

  const [work, setWork] = React.useState<React.ReactElement<
    any,
    React.JSXElementConstructor<any> | string
  > | null>(null!);

  const handleShowWork = React.useCallback(
    (id: string) => {
      if (id === selectedWorkId || R.isNil(selectedWorkId)) {
        setSelectedWorkId(id);
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
    <>
      <Head />
      <Logo onClick={handleCloseWork} />
      <CloseButton
        isShowing={R.not(R.isNil(selectedWorkId))}
        onClick={handleCloseWork}
      />
      <main>
        <div className="hidden md:block">
          <Work>{work && React.cloneElement(work)}</Work>
          <WorkList
            {...{
              handleCloseWork,
              handleMouseOut,
              handleMouseOver,
              handleShowWork,
            }}
          />
        </div>
        <div className="flex h-screen flex-col  justify-center gap-5 p-10 md:hidden">
          <p>
            Andrey Keske is a digital artist and software engineer with a degree
            in computer science. He began his artistic journey in 2006 by
            creating graffiti, which evolved into making stickers and graphic
            designs. Graffiti, a form of street art, can be seen as a type of
            hacking, and Andrey's interest in computer hacking culture and
            programming led to a convergence of these two activities. This
            convergence ultimately led him to create net-art, which is
            represented on this site.
          </p>
          <p>
            In addition to his work in net-art, Andrey also works as a software
            engineer for companies such as Airbnb. His successful startup,{" "}
            <a href="https://apps.apple.com/us/app/w1d1/id1497155726">W1D1</a>,
            was launched in 2020.
          </p>
          <p>
            Andrey currently splits his time between two cities: New York City,
            NY, and Miami, FL, where he resides.
          </p>
          <div className="flex flex-row gap-5">
            <a href="mailto://hello@andreykeske.com">Mail</a>
            <a href="https://github.com/keske">Github</a>
            <a href="https://www.instagram.com/andreykeske/">Instagram</a>
            <a href="https://www.goodreads.com/user/show/63547727-andrey-keske">
              Good Reads
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
