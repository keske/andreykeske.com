import * as React from 'react';

// Components
import Cube from './Cube';

const Dirt: React.FC = () => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/dirt-bottom.png',
      side: 'static/minecraft/dirt-side.png',
      top: 'static/minecraft/dirt-top.png',
    }),
    [],
  );

  return <Cube map={map} />;
};

export default Dirt;
