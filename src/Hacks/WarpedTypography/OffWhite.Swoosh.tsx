import * as React from 'react';

// Local
import { List, OffWhiteCase } from './OffWhite.Components';

const OffWhiteSwoosh: React.FC = () => (
  <OffWhiteCase>
    <group position={[-11, -5.9, -18.5]}>
      <List
        alphabet={[
          [
            'upper-i',
            'upper-n',
            'upper-s',
            'upper-e',
            'upper-r',
            'upper-t',
            'space',
            'upper-s',
            'upper-w',
            'upper-o',
            'upper-o',
            'upper-s',
            'upper-h',
            'space',
            'upper-h',
            'upper-e',
            'upper-r',
            'upper-e',
          ],
        ]}
        warpRatio={2.3}
      />
    </group>
  </OffWhiteCase>
);

export default OffWhiteSwoosh;
