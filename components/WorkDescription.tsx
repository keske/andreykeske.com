import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";
import ReactDOM from "react-dom";

type WorkDescriptionProps = React.PropsWithChildren & {
  selectedCaseId?: string | null;
};

export const WorkDescription: React.FC<WorkDescriptionProps> = ({
  children,
  selectedCaseId = null,
}) => {
  const onUnmount = React.useRef<() => void>();

  const id = React.useId();

  React.useEffect(() => {
    const element =
      document.getElementById(id) ||
      Object.assign(document.createElement("div"), { id });

    if (document.body) {
      document.body.appendChild(element);
      ReactDOM.render(
        <Transition
          afterLeave={() => onUnmount.current?.()}
          appear
          as={React.Fragment}
          show={R.not(R.isNil(selectedCaseId))}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute right-10 bottom-10 text-right font-sans">
              {children}
            </div>
          </Transition.Child>
        </Transition>,
        element,
      );
    }

    return () => {
      if (document.body) {
        document.body.removeChild(element);
      }
    };
  }, [children, id, selectedCaseId]);

  return null;
};
