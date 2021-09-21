import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Log: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/log.png',
      side: 'static/minecraft/log.png',
      top: 'static/minecraft/log.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Log;
