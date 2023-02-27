import { Transition } from "@headlessui/react";
import * as R from "ramda";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import { useListItems } from "@/stores/index";

const Desktop: React.FC = () => {
  const onUnmount = React.useRef<() => void>();

  const { selectedCaseId } = useListItems();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <iframe
        className="h-1/2 w-1/2 border-0 2xl:w-1/5"
        src="/videos/ikea.mp4"
        title="The first discarded piece of IKEA furniture in Augmented Reality"
      />
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
            The first discarded piece of IKEA furniture in Augmented Reality
            <br />
            <br />
            Made in{" "}
            <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
              IKEA Place
            </a>
          </p>
        </Transition.Child>
      </Transition>
    </div>
  );
};

const Mobile: React.FC = () => (
  <div>
    <video
      className="w-screen border-0"
      src="/videos/ikea.mp4"
      title="The first discarded piece of IKEA furniture in Augmented Reality"
    />
    <div className="absolute top-8 left-4">
      <Parallax speed={-3}>
        <h2 className="inline bg-white text-black">
          The first discarded piece of IKEA furniture in Augmented Reality
        </h2>
      </Parallax>
    </div>
  </div>
);

export const Ikea = () =>
  typeof window !== "undefined" && window.innerWidth > 768 ? (
    <Desktop />
  ) : (
    <Mobile />
  );
