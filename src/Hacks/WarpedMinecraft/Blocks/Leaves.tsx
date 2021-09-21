import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Leaves: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/leaves.png',
      side: 'static/minecraft/leaves.png',
      top: 'static/minecraft/leaves.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Leaves;
