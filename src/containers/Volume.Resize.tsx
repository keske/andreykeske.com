/* eslint no-restricted-globals: 0 */
/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';
import styled from 'styled-components';

// Libs
import useSound from 'use-sound';

// Sound
import fugue from './Volume.Fugue.mp3';

const Bottom = styled.div`
  bottom: 30px;
  position: absolute;
`;

const Root = styled.div`
  padding: 30px;
`;

const VolumeResize: React.FC = (): JSX.Element => {
  const [playing, setPlaying] = React.useState<boolean>(false);

  const [volume, setVolume] = React.useState<number>(100);

  const [volumeIndication, setIndicationVolume] =
    React.useState<number>(100);

  const [play, { pause }] = useSound(fugue, {
    volume,
  });

  React.useEffect(() => {
    function handleResize() {
      const newVolume = window.innerHeight / screen.height;

      const newVolumeIndication = Math.floor(
        (window.innerHeight / screen.height) * 100,
      );

      setVolume(newVolume);
      setIndicationVolume(newVolumeIndication);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Root>
      <button
        onClick={() => {
          if (!playing) {
            play();
          } else {
            pause();
          }

          setPlaying(!playing);
        }}
        type="button"
      >
        {playing ? 'PAUSE' : 'PLAY'}
      </button>
      <Bottom>
        {`${volumeIndication}%`}
        <br />
        <a href="https://freemusicarchive.org/music/John_Lewis_Grant/24_Preludes__Fugues_J_S_Bach/Bach_Prelude___Fugue_11">
          Bach Prelude & Fugue 11 by John Lewis Grant
        </a>
      </Bottom>
    </Root>
  );
};

export default VolumeResize;
