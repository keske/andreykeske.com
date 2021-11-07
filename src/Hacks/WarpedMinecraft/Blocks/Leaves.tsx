import * as React from 'react';

// Components
import Cube from '../Cube';

type Props = JSX.IntrinsicElements['group'];

const Leaves: React.FC<Props> = ({ ...rest }: Props) => {
  const map = React.useMemo(
    () => ({
      bottom: 'static/minecraft/_leaves.png',
      side: 'static/minecraft/_leaves.png',
      top: 'static/minecraft/_leaves.png',
    }),
    [],
  );

  return <Cube {...{ ...rest, map }} />;
};

export default Leaves;
