import * as React from 'react';

// Local
import { List, OffWhiteCase } from './OffWhiteComponents';

const OffWhiteSample: React.FC = () => (
  <OffWhiteCase>
    <group position={[-4, -4.9, -10.5]}>
      <List
        alphabet={[
          [
            'quote-left',
            'upper-k',
            'upper-e',
            'upper-s',
            'upper-k',
            'upper-e',
            'quote-right',
            'space',
            'quote-left',
            'upper-s',
            'upper-a',
            'upper-m',
            'upper-p',
            'upper-l',
            'upper-e',
            'quote-right',
          ],
        ]}
      />
    </group>
  </OffWhiteCase>
);

export default OffWhiteSample;
