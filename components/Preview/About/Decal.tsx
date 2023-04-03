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

function LoopOverInstancedBufferAttribute({
  buffer,
  children,
}: {
  buffer?: InstancedBufferAttribute;
  children: any;
}) {
  const [m] = React.useState(() => new Matrix4());

  return (buffer &&
    [...new Array(buffer.count)].map((_, i) => {
      const p = new Vector3();

      const q = new Quaternion();

      const r = new Euler();

      const s = new Vector3();

      console.log("s", s);

      m.fromArray(buffer.array, i * 16);
      m.decompose(p, q, s);
      r.setFromQuaternion(q);

      return children({ key: i, position: p, rotation: r, scale: s });
    })) as any;
}

const Model: React.FC = () => {
  const ref = React.useRef<any>();

  const [texture] = useTexture(["textures/minecraft/dirt-bottom.png"]);

  const transform = React.useCallback(({ dummy, normal, position }) => {
    const p = new Vector3();

    p.copy(position);

    const r = new Euler();

    r.x = Math.random() * Math.PI;

    dummy.position.copy(position);
    dummy.rotation.copy(r);
    dummy.lookAt(p.add(normal));
  }, []);

  const bufferAttribute = useSurfaceSampler(ref, 50, transform);

  return (
    <>
      <mesh ref={ref}>
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
