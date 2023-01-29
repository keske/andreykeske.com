import { Transition } from "@headlessui/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import type { Item } from "@/stores/useListItems";

type ListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowCase: (id: string) => void;
  itemsWithId: Array<Item & { id: string }>;
  selectedCaseId: string | null;
};

export const List: React.FC<ListProps> = ({
  handleMouseOut,
  handleMouseOver,
  handleShowCase,
  itemsWithId,
  selectedCaseId,
}) => {
  const onUnmount = React.useRef<() => void>();

  const groupedByType = R.toPairs(
    R.groupBy((item: Item) => item.type)(itemsWithId) as any,
  );

  return (
    <>
      <div className="fixed bottom-10 ml-12 lg:w-5/6">
        <Transition
          afterLeave={() => onUnmount.current?.()}
          appear
          as={React.Fragment}
          show={R.isNil(selectedCaseId)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <nav className="flex flex-col gap-2">
              {groupedByType.map(
                ([group, items]: [string, Array<Item & { id: string }>]) => (
                  <div className="flex flex-row gap-3" key={group}>
                    <p className="text-xl font-black">{group}</p>
                    <ul>
                      {items
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(
                          (
                            { component: PreviewComponent, id, title },
                            index,
                          ) => (
                            <li
                              className={clsx(
                                "inline-block list-none text-xl font-medium",
                              )}
                              key={id}
                              onClick={() => {
                                handleShowCase(id);
                              }}
                              onMouseOut={handleMouseOut}
                              onMouseOver={() => {
                                // @ts-expect-error work in progress
                                handleMouseOver(<PreviewComponent />);
                              }}
                            >
                              <a
                                className={clsx(
                                  "text-black",
                                  R.isNil(selectedCaseId)
                                    ? "cursor-pointer opacity-100"
                                    : "cursor-default opacity-0",
                                )}
                                href={`#${id}`}
                              >
                                {title}
                              </a>
                              {index < items.length - 1 && (
                                <span
                                  className={clsx(
                                    "mx-2 opacity-20",
                                    R.isNil(selectedCaseId)
                                      ? "cursor-pointer opacity-100"
                                      : "cursor-default opacity-0",
                                  )}
                                >
                                  ・
                                </span>
                              )}
                            </li>
                          ),
                        )}
                    </ul>
                  </div>
                ),
              )}
            </nav>
          </Transition.Child>
        </Transition>
        {/* {typeof window !== "undefined" && window.innerWidth > 768 ? (
          <ul>
            {hydratedItems.map(({ component: PreviewComponent, id, title }) => (
              <li
                className={clsx(
                  "list-none font-black uppercase lg:text-xl xl:text-2xl 2xl:text-4xl",
                  id === selectedCaseId || R.isNil(selectedCaseId)
                    ? "cursor-pointer opacity-100"
                    : "cursor-default opacity-0 hover:opacity-10",
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
        ) : (
          <div className="flex flex-col gap-20">
            {hydratedItems.map(
              ({ component: PreviewComponent, hasMobileVersion, id }) =>
                hasMobileVersion && (
                  <React.Fragment key={id}>
                    <PreviewComponent />
                  </React.Fragment>
                ),
            )}
          </div>
        )} */}
      </div>
    </>
  );
};
