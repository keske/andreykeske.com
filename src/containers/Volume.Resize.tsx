/* eslint no-restricted-globals: 0 */
/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react';

// Libs
import useSound from 'use-sound';
import { StyleSheet, css } from 'aphrodite';

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
    position: 'fixed',
    top: 20,
  },
  copyright: {
    bottom: 20,
    fontSize: 10,
    left: 20,
    position: 'fixed',
  },
  title: {
    bottom: 20,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 600,
    position: 'fixed',
    right: 20,
  },
});

const VolumeResize: React.FC = (): JSX.Element => {
  const [playing, setPlaying] = React.useState<boolean>(false);

  const [volume, setVolume] = React.useState<number>(100);
  const [
    volumeIndication,
    setIndicationVolume,
  ] = React.useState<number>(100);

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
    <div>
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

export default VolumeResize;
