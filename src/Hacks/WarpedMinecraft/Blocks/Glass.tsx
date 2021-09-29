import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'] & {
  transparent: boolean;
};

const Glass: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/glass.png',
      side: 'static/minecraft/glass.png',
      top: 'static/minecraft/glass.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map, transparent: true }} />;
};

export default Glass;
