import { Transition } from "@headlessui/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import type { Item } from "@/stores/useListItems";

type ListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactNode) => void;
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

  return (
    <>
      <div className="fixed bottom-10 ml-12">
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
            <nav>
              <ul>
                {itemsWithId.map(
                  ({ component: PreviewComponent, id, title }) => (
                    <li
                      className={clsx(
                        "inline-block list-none font-black uppercase lg:text-xl xl:text-2xl 2xl:text-4xl",
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
                      <a
                        className={
                          R.isNil(selectedCaseId)
                            ? "cursor-pointer opacity-100"
                            : "cursor-default opacity-0"
                        }
                        href={`#${id}`}
                      >
                        {title}
                      </a>
                      <span
                        className={clsx(
                          "mx-2",
                          R.isNil(selectedCaseId)
                            ? "cursor-pointer opacity-100"
                            : "cursor-default opacity-0",
                        )}
                      >
                        •
                      </span>
                    </li>
                  ),
                )}
              </ul>
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
