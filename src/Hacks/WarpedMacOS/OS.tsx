import * as React from 'react';

// Local
import Pane from './Pane';

const WarpedMacOS: React.FC = () => {
  const random = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (min = 0, max: number) => Math.random() * (max - min) + min,
    [],
  );

  const desktop = 'static/mac-os/desktop.jpg';

  const windows = [
    {
      name: 'finder',
      url: 'static/mac-os/finder.png',
    },
    {
      name: 'github',
      url: 'static/mac-os/github.png',
    },
    {
      name: 'notion',
      url: 'static/mac-os/notion.png',
    },
    {
      name: 'photos',
      url: 'static/mac-os/photos.png',
    },
    {
      name: 'safari',
      url: 'static/mac-os/safari.png',
    },
    {
      name: 'settings',
      url: 'static/mac-os/settings.png',
    },
    {
      name: 'terminal',
      url: 'static/mac-os/terminal.png',
    },
    {
      name: 'vscode',
      url: 'static/mac-os/vscode.png',
    },
  ];

  return (
    <group>
      {windows.map(({ name, url }, index) => (
        <group
          key={name}
          position={[random(-5, 5), random(-5, 5), index * 0.001]}
          scale={[3, 3, 3]}
        >
          <Pane url={url} />
        </group>
      ))}
      <group position={[0, 0, 0]} scale={[5.5, 5.5, 5.5]}>
        <Pane url={desktop} />
      </group>
    </group>
  );
};

export default WarpedMacOS;
