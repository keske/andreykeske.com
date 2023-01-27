import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import React from "react";
import { Mesh } from "three";

import { THREEOnMouseRotation } from "@/components/index";

type BrickProps = {
  color: string;
};

const Brick: React.FC<BrickProps> = ({ color }) => {
  const mesh = React.useRef<Mesh>(null!);

  const { nodes } = useGLTF("/gltfs/lego.gltf") as GLTFResult;

  return (
    <THREEOnMouseRotation ref={mesh}>
      <mesh geometry={nodes.Cube128.geometry} position={[0, 0, 3]} ref={mesh}>
        <meshStandardMaterial metalness={3} roughness={3} />
        <MeshWobbleMaterial
          bumpScale={0.005}
          color={color}
          factor={14}
          metalness={3}
          roughness={0.3}
          speed={0}
        />
      </mesh>
    </THREEOnMouseRotation>
  );
};

export const About: React.FC = () => (
  <div className="h-screen w-screen">
    <div className="absolute w-1/2 px-10 py-40">
      Andrey Keske is a digital artist/software engineer In 2006 Andrey started
      to draw Graffiti which later transforms into making stickers then graphic
      design Graffiti was a form of hacking, in this case on the streets. And at
      the same time, Andrey likes computer hacking culture and had a huge
      interest in programming. Both forms of activity merged → into → net-art,
      which represents this site. Besides net-art Andrey works as a software
      engineer with companies like
      <strong>
        <a href="https://samara.com/"> Samara Airbnb ↗</a>
      </strong>
      and
      <strong>
        <a href="https://jupe.com/">Jupe↗</a>
      </strong>
      , in 2020 launched a successful startup
      <strong>
        <a href="https://apps.apple.com/us/app/w1d1/id1497155726">W1D1 ↗</a>
      </strong>
      He splits his life between two cities New York City , NY, and Miami, Fl
      where he lives
    </div>
  </div>
);
