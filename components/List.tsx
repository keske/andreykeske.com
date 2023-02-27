import { Transition } from "@headlessui/react";
import clsx from "clsx";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

type ListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowCase: (id: string) => void;
};

export const List: React.FC<ListProps> = ({
  handleMouseOut,
  handleMouseOver,
  handleShowCase,
}) => {
  const onUnmount = React.useRef<() => void>();

  const { items, selectedCaseId } = useListItems();

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
              <div className="flex flex-row gap-3">
                <ul>
                  {items
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map(
                      ({ component: PreviewComponent, id, title }, index) => (
                        <li
                          className={clsx(
                            "inline-block list-none text-xl font-black",
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
            </nav>
          </Transition.Child>
        </Transition>
      </div>
    </>
  );
};
