import React, { Component, PropTypes } from 'react';

import AirsynthAudio from './Audio.js';

export default class AirsynthSurface extends Component {

  static propTypes = {
    wave: PropTypes.string,
    filter: PropTypes.string,
    orientation: PropTypes.object,
  };

  play(event) {
    const { wave, filter, orientation } = this.props;

    AirsynthAudio.play(event, wave, filter, orientation);
  }

  render() {
    return (
      <section
        className="surface"
        onClick={event => { this.play(event, 0); }}
      >
      </section>
    );
  }
}
