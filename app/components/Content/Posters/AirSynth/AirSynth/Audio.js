import '../../../../../utils/audio/synth.js';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

let AirsynthAudioContext;
let AirsynthAudioOSC;
let AirsynthAudioFilter;
let AirsynthAudioEnvelope;
let AirsynthAudioFeedbackDelay;

export default class AirsynthAudio {

  static init() {
    AirsynthAudioContext = new AudioContext();
  }

  static play(e, wave, filter, orientation) {
    // const y = e.pageY;
    const y = orientation.beta;
    // const height = e.target.clientHeight;
    const height = 360;
    const min = 40;
    const max = AirsynthAudioContext.sampleRate;
    const octaves = Math.log(max / min) / Math.LN2;
    const multiplier = Math.pow(2, octaves * (((0.5 / height) * (height - y)) - 1.0));

    const delay = orientation.gamma;
    const feedback = orientation.alpha;

    // alert(`multiplier: ${multiplier}, delay: ${delay}, feedback: ${feedback}`);

    // Square wave at 440 Hz (default)
    AirsynthAudioOSC = AirsynthAudioContext.createOscillator();

    // TODO: refactoring
    if (wave === 'sine') {
      AirsynthAudioOSC.type = AirsynthAudioOSC.SINE;
    } else if (wave === 'square') {
      AirsynthAudioOSC.type = AirsynthAudioOSC.SQUARE;
    } else if (wave === 'sawtooth') {
      AirsynthAudioOSC.type = AirsynthAudioOSC.SAWTOOTH;
    } else if (wave === 'triangle') {
      AirsynthAudioOSC.type = AirsynthAudioOSC.TRIANGLE;
    }

    // Wave filter
    AirsynthAudioFilter = AirsynthAudioContext.createBiquadFilter();

    // TODO: refactoring
    if (filter === 'lowpass') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.LOWPASS;
    } else if (filter === 'highpass') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.HIGHPASS;
    } else if (filter === 'bandpass') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.BANDPASS;
    } else if (filter === 'lowshelf') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.LOWSHELF;
    } else if (filter === 'hightshelf') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.HIGHSHELF;
    } else if (filter === 'peaking') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.PEAKING;
    } else if (filter === 'notch') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.NOTCH;
    } else if (filter === 'allpass') {
      AirsynthAudioFilter.type = AirsynthAudioFilter.ALLPASS;
    }

    AirsynthAudioOSC.frequency.value = max * multiplier;

    // Envelope with 0.001 sec attack and 0.5 sec decay
    AirsynthAudioEnvelope = AirsynthAudioContext.createEnvelope(0.001, 0.5, 0, 0);

    // Feedback delay of 0.4 seconds with 0.5x feedback
    AirsynthAudioFeedbackDelay = AirsynthAudioContext.createFeedbackDelay(delay, feedback);

    AirsynthAudioFilter.connect(AirsynthAudioEnvelope);
    AirsynthAudioOSC.connect(AirsynthAudioFilter);
    AirsynthAudioEnvelope.connect(AirsynthAudioFeedbackDelay);
    AirsynthAudioEnvelope.connect(AirsynthAudioContext.destination);
    AirsynthAudioFeedbackDelay.connect(AirsynthAudioContext.destination);

    // Trigger the note and release after 0.6 seconds
    AirsynthAudioEnvelope.trigger(0.6);

    AirsynthAudioOSC.noteOn(0);
  }

}
