import { Text } from "@react-three/drei";
import {
  Canvas,
  ThreeEvent,
  useFrame,
  useThree,
} from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

import { useListItems } from "@/stores/index";

const random =
  // eslint-disable-next-line @typescript-eslint/default-param-last
  (min = 0, max: number) => Math.random() * (max - min) + min;

type WorkListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowWork: (id: string) => void;
};

type PlasmaMaterialOptions = {
  colors?: THREE.Color[];
  frequency?: {
    x: number;
    y: number;
    z: number;
  };
  intensivity?: number;
  time?: number;
};

const usePlasmaMaterial = (options: PlasmaMaterialOptions = {}) => {
  const {
    colors = [new THREE.Color("red"), new THREE.Color("blue")],
    frequency: { x = 10.0, y = 10.0, z = 10.0 } = {},
    intensivity = 1000.0,
    time = 1.0,
  } = options;

  const material = new THREE.ShaderMaterial({
    fragmentShader: `
      uniform vec3 colors[${colors.length}];
      uniform vec3 frequency;
      uniform float time;
      uniform float intensivity;
      varying vec2 vUv;

      void main() {
        vec3 color = vec3(
          sin(vUv.x * frequency.x + time),
          cos(vUv.y * frequency.y + time),
          cos(vUv.x * vUv.y * frequency.z + time)
        );

        float plasmaIndex = (color.x / 3.0 + color.y / 30.0 + color.z * 1.01);

        vec3 finalColor = colors[0];

        for (int i = 1; i < ${colors.length}; i++) {
          if (plasmaIndex < float(i) / float(${colors.length})) {
            finalColor = mix(colors[i - 1], colors[i], (plasmaIndex - float(i - 1) / float(${colors.length})) * float(${colors.length}));
            break;
          }
        }

        float intens = intensivity * 0.01;
        vec3 intensColor = finalColor;
        if (intensivity > 0.0) {
          for (int i = 0; i < 5; i++) {
            intensColor += finalColor * intens;
          }
          intensColor /= 5.0;
        }

        gl_FragColor = vec4(intensColor, 1.0);
      }
    `,
    uniforms: {
      colors: { value: colors },
      frequency: { value: new THREE.Vector3(x, y, z) },
      intensivity: { value: intensivity },
      time: { value: time },
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix *vec4(position , 0.6);
      }
    `,
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime() * time;
  });

  return material;
};

const Word: React.FC<WorkListProps> = ({
  handleMouseOut: incomingHandleMouseOut,
  handleMouseOver: incomingHandleMouseOver,
  handleShowWork: incomingHandleShowWork,
}) => {
  const { viewport } = useThree();

  const { selectedWorkId, works } = useListItems();

  const material = usePlasmaMaterial({
    colors: [
      new THREE.Color("white"),
      new THREE.Color("green"),
      new THREE.Color("red"),
      new THREE.Color("pink"),
      new THREE.Color("blue"),
      new THREE.Color("pink"),
    ],
    frequency: { x: 10.0, y: 70.0, z: 10.0 },
    intensivity: 500,
    time: 0.1,
  });

  const [hovered, setHovered] = React.useState(false);

  const handleMouseOver = React.useCallback(
    (
      event: ThreeEvent<PointerEvent>,
      component: React.ReactElement<any, any>,
    ) => {
      incomingHandleMouseOver(component);
      event.stopPropagation();
      setHovered(true);
    },
    [incomingHandleMouseOver],
  );

  const handleMouseOut = React.useCallback(() => {
    incomingHandleMouseOut();
    setHovered(false);
  }, [incomingHandleMouseOut]);

  const handleShowWork = React.useCallback(
    (id: string) => {
      incomingHandleShowWork(id);
    },
    [incomingHandleShowWork],
  );

  const content = React.useMemo(() => {
    const left = -viewport.width / 2;

    const bottom = -viewport.height / 2;

    return (
      <group position={[left + 0.7, bottom + 2, 0]}>
        {[...works]
          .reverse()
          .map(({ component: Component, id, title }, index) => (
            <Text
              anchorX="left"
              children={title}
              font={"/Inter-Bold.woff"}
              fontSize={1.3}
              key={id}
              material={material}
              onClick={() => handleShowWork(id)}
              onPointerOut={handleMouseOut}
              onPointerOver={(e) => handleMouseOver(e, <Component />)}
              position={[0, index * 1.7, 0]}
            />
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

  React.useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  return content;
};

export const Works: React.FC<WorkListProps> = ({ ...props }) => (
  <Canvas
    camera={{ position: [0, 0, 15] }}
    style={{
      height: "100vh",
      left: 0,
      position: "fixed",
      top: 0,
    }}
  >
    <React.Suspense fallback={null}>
      <Word {...props} />
    </React.Suspense>
  </Canvas>
);
