import * as React from 'react';

// Local
import Pane from './Pane';

const WarpedMacOS: React.FC = () => {
  const finder = 'static/mac-os/finder.png';

  const vscode = 'static/mac-os/vscode.png';

  const safari = 'static/mac-os/safari.png';

  return (
    <group>
      <Pane url={finder} />
      <Pane url={vscode} />
      <Pane url={safari} />
    </group>
  );
};

export default WarpedMacOS;
