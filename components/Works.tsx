import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

import { TextWithShader } from "./TextWithShader";

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
  const { viewport } = useThree();

  const { works } = useListItems();

  const [hovered, setHovered] = React.useState(false);

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
    (
      event: ThreeEvent<PointerEvent>,
      Component: React.JSXElementConstructor<any>,
    ) => {
      incomingHandleMouseOver(<Component />);
      event.stopPropagation();
      setHovered(true);
    },
    [incomingHandleMouseOver],
  );

  const handleMouseOut = React.useCallback(() => {
    setHovered(false);
  }, []);

  const handleShowWork = React.useCallback(
    (id: string) => {
      incomingHandleShowWork(id);
    },
    [incomingHandleShowWork],
  );

  React.useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  const content = React.useMemo(() => {
    const left = -viewport.width / 2;

    const bottom = -viewport.height / 2;

    return (
      <group position={[left + 0.7, bottom + 1.3, 0]}>
        {[...works].reverse().map(({ component, id, title }) => (
          <group
            key={id}
            onClick={() => {
              handleShowWork(id);
            }}
            onPointerOut={handleMouseOut}
            onPointerOver={(event: ThreeEvent<PointerEvent>) => {
              handleMouseOver(event, component);
            }}
          >
            <TextWithShader material={material} value={title} />
          </group>
        ))}
      </group>
    );
  }, [
    handleMouseOut,
    handleMouseOver,
    handleShowWork,
    material,
    viewport.height,
    viewport.width,
    works,
  ]);

  return content;
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
