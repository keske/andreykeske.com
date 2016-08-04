import React, { Component, PropTypes } from 'react';

// Decorators
import { Orientation } from '../../../../../decorators/deviceOrientation';

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

@Orientation
export default class Airsynth extends Component {

  static propTypes = {
    wave: PropTypes.string,
    filter: PropTypes.string,
    orientation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      // Audio waves and filters, get random
      wave: AudioWaves[random(0, AudioWaves.length - 1)],
      filter: AudioFilters[random(0, AudioFilters.length - 1)],
    };
  }

  componentDidMount() {
    AirsynthAudio.init();
  }

  render() {
    const {
      wave,
      filter,
      orientation,
      orientation: { alpha, beta, gamma },
    } = this.props;

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
