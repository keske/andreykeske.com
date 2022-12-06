import clsx from "clsx";
import { useRouter } from "next/router";
import * as R from "ramda";
import React from "react";

import type { Item } from "@/stores/useListItems";

import { CloseButton } from "@/components/index";
import { useListItems } from "@/stores/index";

type HydratedItem = Item & { id: string };

const ViewModeList = () => {
  const router = useRouter();

  const { items } = useListItems();

  const hydratedItems = React.useMemo<HydratedItem[]>(
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

  React.useEffect(() => {
    if (router.asPath !== "/") {
      const caseId = router.asPath.replace("/#", "");

      const { component } = R.find(
        R.propEq("id", router.asPath.replace("/#", "")),
      )(hydratedItems) as HydratedItem;

      setPreview(component);
      setSelectedCaseId(caseId);
    }
  }, [hydratedItems, router.asPath]);

  return (
    <>
      <div className="absolute top-0">{preview}</div>
      <div className="absolute mt-10">
        <a className="ml-12 text-2xl" href="/">
          Andrey Keske
        </a>
        <ul>
          {hydratedItems.map(({ component: PreviewComponent, id, title }) => (
            <li
              className={clsx(
                "list-none text-2xl font-semibold",
                id === selectedCaseId || R.isNil(selectedCaseId)
                  ? "cursor-pointer opacity-100"
                  : "opacity-10",
              )}
              key={id}
              onClick={() => {
                handleShowCase(id);
              }}
              onMouseOut={handleMouseOut}
              onMouseOver={() => {
                handleMouseOver(<PreviewComponent />);
              }}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
      <CloseButton
        isShowing={R.not(R.isNil(selectedCaseId))}
        onClick={handleCloseCase}
      />
    </>
  );
};

export default ViewModeList;
