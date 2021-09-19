import * as React from 'react';
import * as THREE from 'three';

// Components
import { Nurbs } from '../../components/NURBS';

type Props = {
  nsControlPoints: THREE.Vector4[][];
  url: string;
};

const CubeFace: React.FC<Props> = (props: Props) => (
  <Nurbs {...props} />
);

export default CubeFace;
