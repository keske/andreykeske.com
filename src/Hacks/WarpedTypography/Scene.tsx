import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const WarpedTypographyScene: React.FC<Props> = ({
  children,
}: Props) => (
  <group>
    <ambientLight intensity={0.2} />

    <spotLight
      angle={Math.PI / 6}
      castShadow
      intensity={0.2}
      position={[20, 20, 30]}
      shadow-bias={-0.00005}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
    />

    {children}
  </group>
);

export default WarpedTypographyScene;