import { Transition } from "@headlessui/react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { NURBSLetter, Tab } from "@/components/index";
import { useControls } from "@/hooks/index";

type TypographyWarpedProps = {
  selectedCaseId?: string | null;
};

export const TypographyWarped: React.FC<TypographyWarpedProps> = ({
  selectedCaseId,
}) => {
  const { warpRatio } = useControls(
    {
      warpRatio: {
        max: 100,
        min: 1,
        step: 1,
        value: 10.4,
      },
    },
    {
      hidden: R.isNil(selectedCaseId),
    },
  );

  const onUnmount = React.useRef<() => void>();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const renderAlphabet = React.useMemo(() => {
    const alphabet = R.pipe(
      R.times(R.identity),
      R.map((index) =>
        R.map(
          (type) => `${type}-${String.fromCharCode(97 + index)}`,
          ["upper", "lower"],
        ),
      ),
      R.flatten,
      R.splitEvery(12),
    )(26) as string[][];

    const renderLetters = (letters: string[]) =>
      letters.map((letter, index) => (
        <group
          key={letter}
          position={[3.3 * index, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
        >
          <NURBSLetter
            url={`images/helvetica/${letter}.png`}
            warpRatio={warpRatio.value}
          />
        </group>
      ));

    return alphabet.map((letters, index) => (
      <group key={index} position={[-16.5, -3.2 * (index - 3), 0]}>
        {renderLetters(letters)}
      </group>
    ));
  }, [warpRatio]);

  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [0, 0, 30],
        }}
        className="h-screen w-screen bg-[#ccff00]"
      >
        <React.Suspense fallback={null}>
          <PerspectiveCamera fov={35} makeDefault position={[0, 0, 30]} />
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <NURBSLetter
            url={`images/helvetica/upper-a.png`}
            warpRatio={warpRatio.value}
          />
        </React.Suspense>
      </Canvas>
      {selectedTab === 1 && (
        <Canvas
          camera={{
            position: [0, 0, 30],
          }}
          className="h-screen w-screen bg-[#ccff00]"
        >
          <React.Suspense fallback={null}>
            <PerspectiveCamera fov={35} makeDefault position={[0, 0, 30]} />
            <OrbitControls />
            <ambientLight intensity={0.3} />
            {renderAlphabet}
          </React.Suspense>
        </Canvas>
      )}
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
          <div className="fixed top-40 flex w-screen flex-row items-center justify-center gap-10">
            {["Alphabet", "Nike", "Try"].map((label, index) => (
              <React.Fragment key={index}>
                <Tab
                  isActive={selectedTab === index}
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                >
                  {label}
                </Tab>
              </React.Fragment>
            ))}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
};
