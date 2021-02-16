import * as React from 'react';

// Libs
import axios from 'axios';
import { useResource } from 'react-three-fiber';
import { MeshDistortMaterial, Text } from '@react-three/drei';

// Local
import Buble from './Buble';

const Scene: React.FC = () => {
  const [price, setPrice] = React.useState<number>(0);

  const material = useResource();

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://blockchain.info/ticker',
      );

      setPrice(data.USD['15m']);
    })();
  }, []);

  return (
    <group>
      <Text color="white" fontSize={0.1} position={[0, 0.15, 0]}>
        BTC
      </Text>
      <Text color="white" fontSize={0.3} position={[0, -0.1, 0]}>
        {`$${price}`}
      </Text>
      <MeshDistortMaterial
        ref={material}
        bumpScale={0.005}
        clearcoat={0.1}
        clearcoatRoughness={0.9}
        color="rgba(0, 0, 0, 0.0)"
        distort={0.21}
        metalness={1}
        radius={1.3}
        roughness={0.3}
      />
      <Buble material={material} />
    </group>
  );
};

export default Scene;
