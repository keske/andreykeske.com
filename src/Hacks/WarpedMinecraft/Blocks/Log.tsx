import * as React from 'react';

// Components
import Cube from '../Cube';

const Log: React.FC = () => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/log.png',
      side: 'static/minecraft/log.png',
      top: 'static/minecraft/log.png',
    }),
    [],
  );

  return <Cube map={map} />;
};

export default Log;
