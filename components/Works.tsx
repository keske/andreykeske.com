import { Text } from "@react-three/drei";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
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

type WordProps = WorkListProps & {
  component: React.JSXElementConstructor<any>;
  id: string;
  index: number;
  title: string;
};

const Word: React.FC<WordProps> = ({
  component: Component,
  handleMouseOut: incomingHandleMouseOut,
  handleMouseOver: incomingHandleMouseOver,
  handleShowWork: incomingHandleShowWork,
  id,
  index,
  title,
}) => {
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
    (event: ThreeEvent<PointerEvent>) => {
      incomingHandleMouseOver(<Component />);
      event.stopPropagation();
      setHovered(true);
    },
    [Component, incomingHandleMouseOver],
  );

  const handleMouseOut = React.useCallback(() => {
    incomingHandleMouseOut();
    setHovered(false);
  }, [incomingHandleMouseOut]);

  const handleShowWork = React.useCallback(() => {
    incomingHandleShowWork(id);
  }, [id, incomingHandleShowWork]);

  React.useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  return (
    <Text
      anchorX="left"
      children={title}
      font={"/Inter-Bold.woff"}
      fontSize={1.3}
      material={material}
      onClick={handleShowWork}
      onPointerOut={handleMouseOut}
      onPointerOver={handleMouseOver}
      position={[0, index * 1.1, 0]}
    />
  );
};

const List: React.FC<WorkListProps> = ({ ...props }) => {
  const { viewport } = useThree();

  const { works } = useListItems();

  const content = React.useMemo(() => {
    const left = -viewport.width / 2;

    const bottom = -viewport.height / 2;

    return (
      <group position={[left + 0.7, bottom + 1.3, 0]}>
        {[...works]
          .reverse()
          .map(({ component, id, title }, index) => (
            <Word
              {...props}
              component={component}
              id={id}
              index={index}
              key={id}
              title={title}
            />
          ))}
      </group>
    );
  }, [props, viewport.height, viewport.width, works]);

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
