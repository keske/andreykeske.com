/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';
import styled from 'styled-components';

// Libs
import useSound from 'use-sound';
import { useScroll } from 'react-use-gesture';

// Hooks
import { useWindowSize } from '../hooks';

// Sound
import fugue from './Volume.Fugue.mp3';

const Bottom = styled.div`
  bottom: 30px;
  position: fixed;
`;

const Root = styled.div`
  padding: 30px;
`;

const VolumeScroll: React.FC = (): JSX.Element => {
  const [playing, setPlaying] = React.useState<boolean>(false);

  const [volume, setVolume] = React.useState<number>(100);

  const [volumeIndication, setVolumeIndication] =
    React.useState<number>(100);

  const { height, width } = useWindowSize();

  const totalHeight = height * 10;

  const [play, { pause }] = useSound(fugue, {
    volume,
  });

  useScroll(
    ({ xy: [, y] }) => {
      const newVolume = +(1 - y / (totalHeight - height)).toFixed(2);

      const newVolumeIndication = Math.floor(
        (1 - y / (totalHeight - height)) * 100,
      );

      setVolume(newVolume);
      setVolumeIndication(newVolumeIndication);
    },
    {
      domTarget: window,
    },
  );

  return (
    <Root style={{ height: totalHeight, width }}>
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

export default VolumeScroll;
