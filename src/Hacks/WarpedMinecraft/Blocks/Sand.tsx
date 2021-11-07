import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Sand: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/_sand.png',
      side: 'static/minecraft/_sand.png',
      top: 'static/minecraft/_sand.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Sand;
