import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Stone: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/_stone.png',
      side: 'static/minecraft/_stone.png',
      top: 'static/minecraft/_stone.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Stone;
