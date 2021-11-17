import * as React from 'react';

// Local
import { List, OffWhiteCase } from './OffWhite.Components';

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
        warpRatio={7.1}
      />
    </group>
  </OffWhiteCase>
);

export default OffWhiteAirLarge;
