import { Box } from "@react-three/drei";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

import { usePlasmaMaterial } from "@/hooks/index";
import { useListItems } from "@/stores/index";
import { random } from "@/utils/index";

type WorkListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowWork: (id: string) => void;
};

const List: React.FC<WorkListProps> = ({
  handleMouseOut: incomingHandleMouseOut,
  handleMouseOver: incomingHandleMouseOver,
  handleShowWork: incomingHandleShowWork,
}) => {
  const frequencies = React.useMemo(
    () => ({
      x: random(-10.0, 10.0),
      y: random(-70.0, 70.0),
      z: random(-10.0, 10.0),
    }),
    [],
  );

  const material = usePlasmaMaterial({
    colors: [
      new THREE.Color("white"),
      new THREE.Color("green"),
      new THREE.Color("red"),
      new THREE.Color("pink"),
      new THREE.Color("blue"),
      new THREE.Color("pink"),
    ],
    frequency: frequencies,
    intensivity: 500,
    time: 0.1,
  });

  const handleMouseOver = React.useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      // incomingHandleMouseOver(<Component />);
    },
    [],
  );

  const handleMouseOut = React.useCallback(() => {
    // incomingHandleMouseOut();
  }, []);

  const handleShowWork = React.useCallback(() => {
    // incomingHandleShowWork(id);
  }, []);

  return (
    <Box
      // children={title}
      material={material}
      onClick={handleShowWork}
      onPointerOut={handleMouseOut}
      onPointerOver={handleMouseOver}
      position={[0, 0, 0]}
    />
  );
};

export const WorksList: React.FC<WorkListProps> = ({ ...props }) => {
  const { selectedWorkId } = useListItems();

  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      style={{
        height: "100vh",
        left: selectedWorkId ? -9999 : 0,
        position: "fixed",
        top: selectedWorkId ? -9999 : 0,
      }}
    >
      <React.Suspense fallback={null}>
        <List {...props} />
      </React.Suspense>
    </Canvas>
  );
};
