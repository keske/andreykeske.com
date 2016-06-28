import React, { Component } from 'react';

// Utils
import { random } from '../../../../../utils/math';
import AudioWaves from '../../../../../utils/audio/audioWaves';
import AudioFilters from '../../../../../utils/audio/AudioFilters';

// Components
import AirsynthAudio from './Audio.js';
import AirsynthSurface from './Surface.js';
import PhoneLog from '../../../../Helpers/PhoneLog';

// Component styles
import { styles } from './airsynth.scss';

export default class Airsynth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Audio waves and filters, get random
      wave: AudioWaves[random(0, AudioWaves.length - 1)],
      filter: AudioFilters[random(0, AudioFilters.length - 1)],
      // Device rate of rotation
      orientation: {
        alpha: 0,
        beta: 0,
        gamma: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('deviceorientation', this.handleRotation, false);
    AirsynthAudio.init();
  }

  handleRotation = event => {
    const { alpha, beta, gamma } = event;
    const maxRound = 0;

    this.setState({
      orientation: {
        alpha: alpha.toFixed(maxRound),
        beta: beta.toFixed(maxRound),
        gamma: gamma.toFixed(maxRound),
      },
    });
  };

  render() {
    const {
      wave,
      filter,
      orientation,
      orientation: { alpha, beta, gamma },
    } = this.state;

    return (
      <div className={styles}>
        <AirsynthSurface
          wave={wave}
          filter={filter}
          orientation={orientation}
        />
        <PhoneLog log={`a: ${alpha}, b: ${beta}, g: ${gamma}`} />
      </div>
    );
  }
}
