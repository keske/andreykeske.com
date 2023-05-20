import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as R from "ramda";
import React from "react";

import { NURBSLetter } from "@/components/index";
import { useControls } from "@/hooks/index";
import { useListItems } from "@/stores/index";

export const TypographyNURBSAlphabet: React.FC = () => {
  const { selectedWorkId } = useListItems();

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
      hidden: R.isNil(selectedWorkId),
    },
  );

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
          <PerspectiveCamera
            fov={35}
            makeDefault
            position={[0, 0, 30]}
          />
          <OrbitControls />
          <ambientLight intensity={0.3} />
          {renderAlphabet}
        </React.Suspense>
      </Canvas>
    </div>
  );
};
