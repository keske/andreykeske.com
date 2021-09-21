import * as React from 'react';

// Components
import Cube from '../Cube';

const Leaves: React.FC = () => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/leaves.png',
      side: 'static/minecraft/leaves.png',
      top: 'static/minecraft/leaves.png',
    }),
    [],
  );

  return <Cube map={map} />;
};

export default Leaves;
