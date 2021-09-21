import * as React from 'react';

// Components
import Cube from '../Cube';

const Stone: React.FC = () => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/stone.png',
      side: 'static/minecraft/stone.png',
      top: 'static/minecraft/stone.png',
    }),
    [],
  );

  return <Cube map={map} />;
};

export default Stone;
