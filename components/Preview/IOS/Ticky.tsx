import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";

import { UploadcareImage } from "@/components/index";
import { useListItems } from "@/stores/index";

export const Ticky: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { selectedCaseId } = useListItems();

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 py-40">
      <div className="xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
        <UploadcareImage
          alt="Side view"
          src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
        />
      </div>
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
          <p>
            Ticky is an application that shows the current time (or selected
            timezone&rsquo;s time) through the notification badge.
            <br />
            <br />
            <small>Soon on the AppStore</small>
          </p>
        </Transition.Child>
      </Transition>
    </div>
  );
};
