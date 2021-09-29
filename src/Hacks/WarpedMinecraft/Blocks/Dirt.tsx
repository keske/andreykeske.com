import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Dirt: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/dirt-bottom.png',
      side: 'static/minecraft/dirt-side.png',
      top: 'static/minecraft/dirt-top.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Dirt;
