import { Transition } from "@headlessui/react";
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
                  {items.map(
                    ({ component: PreviewComponent, id, title }, index) => (
                      <li
                        className={
                          "inline-block list-none text-xl font-black uppercase tracking-wider"
                        }
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
                        <a className="text-black" href={`#${id}`}>
                          {title}
                        </a>
                        {index < items.length - 1 && (
                          <span className="mx-2 opacity-20">・</span>
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