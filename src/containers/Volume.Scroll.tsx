/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';

// Libs
import useSound from 'use-sound';
import { StyleSheet, css } from 'aphrodite';
import { useScroll } from 'react-use-gesture';

// Hooks
import { useWindowSize } from '../hooks';

// Sound
import fugue from './Volume.Fugue.mp3';

const styles = StyleSheet.create({
  button: {
    border: `none`,
    borderRadius: 10,
    color: '#444',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 800,
    left: 20,
    letterSpacing: 2,
    padding: 15,
    position: 'absolute',
    top: 20,
  },
  copyright: {
    bottom: 20,
    fontSize: 10,
    left: 20,
    position: 'fixed',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 600,
    position: 'fixed',
    right: 20,
    top: 20,
  },
});

const VolumeScroll: React.FC = (): JSX.Element => {
  const [playing, setPlaying] = React.useState<boolean>(false);

  const [volume, setVolume] = React.useState<number>(100);
  const [
    volumeIndication,
    setVolumeIndication,
  ] = React.useState<number>(100);

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
    <div style={{ height: totalHeight, width }}>
      <button
        className={css(styles.button)}
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
      <div
        className={css(styles.title)}
      >{`${volumeIndication}%`}</div>
      <div className={css(styles.copyright)}>
        <a href="https://freemusicarchive.org/music/John_Lewis_Grant/24_Preludes__Fugues_J_S_Bach/Bach_Prelude___Fugue_11">
          Bach Prelude & Fugue 11 by John Lewis Grant
        </a>
      </div>
    </div>
  );
};

export default VolumeScroll;
