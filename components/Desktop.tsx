import { Inter } from "@next/font/google";
import { Plane } from "@react-three/drei";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import * as R from "ramda";
import * as React from "react";
import * as THREE from "three";

import type { NextPage } from "next";

import {
  CloseButton,
  Logo,
  Work,
  WorkList,
} from "@/components/index";
import { usePlasmaMaterial } from "@/hooks/index";
import { useListItems } from "@/stores/index";
import { random } from "@/utils/index";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700", "800", "900"],
});

const Background = () => {
  const frequencies = React.useMemo(
    () => ({
      x: 100,
      y: 100,
      z: 100,
    }),
    [],
  );

  const material = usePlasmaMaterial({
    colors: [
      new THREE.Color("black"),
      new THREE.Color("green"),
      new THREE.Color("red"),
      new THREE.Color("pink"),
      new THREE.Color("blue"),
      new THREE.Color("pink"),
    ],
    frequency: frequencies,
    intensivity: 1,
    time: 0.1,
  });

  return (
    <Plane args={[30, 60]} material={material} position={[0, 0, 0]} />
  );
};

const Desktop: NextPage = () => {
  const router = useRouter();

  const [, startTransition] = React.useTransition();

  const { selectedWorkId, setSelectedWorkId } = useListItems();

  const [work, setWork] = React.useState<React.ReactElement<
    any,
    React.JSXElementConstructor<any> | string
  > | null>(null!);

  const handleShowWork = React.useCallback(
    (id: string) => {
      if (id === selectedWorkId || R.isNil(selectedWorkId)) {
        startTransition(() => {
          setSelectedWorkId(id);
        });
      }
    },
    [selectedWorkId, setSelectedWorkId],
  );

  const handleCloseWork = React.useCallback(() => {
    router.push("");

    setWork(null);
    setSelectedWorkId(null);
  }, [router, setSelectedWorkId]);

  const handleMouseOut = React.useCallback(() => {
    if (R.isNil(selectedWorkId)) {
      setWork(null);
    }
  }, [selectedWorkId]);

  const handleMouseOver = React.useCallback(
    (component: React.ReactElement<any, any>) => {
      if (R.isNil(selectedWorkId)) {
        setWork(component);
      }
    },
    [selectedWorkId],
  );

  return (
    <div className={inter.className}>
      <div className="fixed z-30">
        <Logo onClick={handleCloseWork} />
        <CloseButton
          isShowing={R.not(R.isNil(selectedWorkId))}
          onClick={handleCloseWork}
        />
        <Work>{work && React.cloneElement(work)}</Work>
        <WorkList
          {...{
            handleCloseWork,
            handleMouseOut,
            handleMouseOver,
            handleShowWork,
          }}
        />
      </div>
      {/* <Canvas
        camera={{ position: [0, 0, 5] }}
        className="fixed z-0"
        style={{
          height: "100vh",
          left: selectedWorkId ? -9999 : 0,
          position: "fixed",
          top: selectedWorkId ? -9999 : 0,
          width: "100vw",
        }}
      >
        <React.Suspense fallback={null}>
          <Background />
        </React.Suspense>
      </Canvas> */}
    </div>
  );
};

export default Desktop;
