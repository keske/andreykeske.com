import * as React from 'react';

// Components
import { Leaves, Log } from '../Blocks';

const Tree: React.FC = () => (
  <group>
    <Log position={[0, 0, 0]} />
    <Log position={[0, 4, 0]} />
    <Log position={[0, 8, 0]} />
    <Log position={[0, 12, 0]} />

    <Leaves position={[4, 12, 0]} />
    <Leaves position={[-4, 12, 0]} />
    <Leaves position={[0, 12, 4]} />
    <Leaves position={[0, 12, -4]} />
    <Leaves position={[0, 16, 0]} />
  </group>
);

export default Tree;
