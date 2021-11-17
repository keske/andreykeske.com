import * as React from 'react';

// Local
import { List, OffWhiteCase } from './OffWhiteComponents';

const OffWhiteAirLarge: React.FC = () => (
  <OffWhiteCase>
    <group position={[-0.8, -1.1, -0.5]}>
      <List
        alphabet={[
          [
            'quote-left',
            'upper-a',
            'upper-i',
            'upper-r',
            'quote-right',
          ],
        ]}
      />
    </group>
  </OffWhiteCase>
);

export default OffWhiteAirLarge;
