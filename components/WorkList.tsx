import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

type WorkListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowWork: (id: string) => void;
};

export const WorkList: React.FC<WorkListProps> = ({
  handleMouseOut,
  handleMouseOver,
  handleShowWork,
}) => {
  const onUnmount = React.useRef<() => void>();

  const { selectedWorkId, works } = useListItems();

  return (
    <div className="fixed bottom-10 ml-10 lg:w-5/6">
      <Transition
        afterLeave={() => onUnmount.current?.()}
        appear
        as={React.Fragment}
        show={R.isNil(selectedWorkId)}
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
            <ul>
              {works.map(({ component: Component, id, title }) => (
                <li
                  className={
                    "list-none text-3xl font-black uppercase tracking-wider"
                  }
                  key={id}
                  onClick={() => {
                    handleShowWork(id);
                  }}
                  onMouseOut={handleMouseOut}
                  onMouseOver={() => {
                    handleMouseOver(<Component />);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Transition.Child>
      </Transition>
    </div>
  );
};
