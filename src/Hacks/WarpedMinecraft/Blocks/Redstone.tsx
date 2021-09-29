import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Redstone: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/redstone.png',
      side: 'static/minecraft/redstone.png',
      top: 'static/minecraft/redstone.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Redstone;
