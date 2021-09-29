import * as React from 'react';

// Components
import World from './World';

const WarpedMinecraftScene: React.FC = () => (
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

    <World />
  </group>
);

export default WarpedMinecraftScene;
