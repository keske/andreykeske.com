import {
  Decal,
  OrbitControls,
  useSurfaceSampler,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  Euler,
  InstancedBufferAttribute,
  Matrix4,
  Mesh,
  Quaternion,
  Vector3,
} from "three";

type LoopOverInstancedBufferAttributeProps = {
  buffer: InstancedBufferAttribute | undefined;
  children: (props: LoopOverInstancedBufferAttributeChildProps) => JSX.Element;
};

type LoopOverInstancedBufferAttributeChildProps = {
  key: number;
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
};

function LoopOverInstancedBufferAttribute({
  buffer,
  children,
}: LoopOverInstancedBufferAttributeProps) {
  const [matrix] = React.useState(() => new Matrix4());

  return buffer ? (
    <>
      {[...new Array(buffer.count)].map((_, i) => {
        const position = new Vector3();

        const quaternion = new Quaternion();

        const rotation = new Euler();

        const scale = new Vector3();

        matrix.fromArray(buffer.array, i * 16);
        matrix.decompose(position, quaternion, scale);
        rotation.setFromQuaternion(quaternion);

        console.log("rotation", rotation);

        const childProps: LoopOverInstancedBufferAttributeChildProps = {
          key: i,
          position,
          rotation,
          scale,
        };

        return children(childProps);
      })}
    </>
  ) : null;
}

const Model: React.FC = () => {
  const ref = React.useRef<any>();

  const [texture] = useTexture(["textures/minecraft/dirt-bottom.png"]);

  const transform = React.useCallback(
    ({
      dummy,
      normal,
      position,
    }: {
      dummy: any;
      normal: any;
      position: any;
    }) => {
      const p = new Vector3();

      p.copy(position);

      const r = new Euler();

      r.x = Math.random() * Math.PI;

      dummy.position.copy(position);
      dummy.rotation.copy(r);
      dummy.lookAt(p.add(normal));
    },
    [],
  );

  const bufferAttribute = useSurfaceSampler(ref, 200, transform);

  return (
    <>
      <mesh ref={ref}>
        {/* <torusKnotGeometry args={[20, 1.3, 300, 2, 2, 1]} /> */}
        <sphereGeometry args={[10, 10, 10, 1]} />
        <meshPhongMaterial color={0xffffff} />
      </mesh>
      <LoopOverInstancedBufferAttribute buffer={bufferAttribute}>
        {({ ...props }) => (
          <Decal mesh={ref} {...props}>
            <meshPhysicalMaterial
              alphaTest={0}
              depthTest={false}
              map={texture}
              polygonOffset={true}
              polygonOffsetFactor={-10}
              roughness={0.2}
              transparent
            />
          </Decal>
        )}
      </LoopOverInstancedBufferAttribute>
    </>
  );
};

export function Test() {
  console.log("");

  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 50] }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 30]} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}
