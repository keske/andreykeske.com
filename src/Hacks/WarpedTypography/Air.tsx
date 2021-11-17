import * as React from 'react';

// Local
import { List, OffWhiteCase } from './OffWhiteComponents';

const OffWhiteAir: React.FC = () => (
  <OffWhiteCase>
    <group position={[2, -2.9, -6.5]}>
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

export default OffWhiteAir;
