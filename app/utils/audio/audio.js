import $ from 'jquery';
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var Audio = {

  // AudioContext sources
  sources: [],
  // AudioContext contexts
  contexts: [],
  // AudioContext buffers
  buffers: {},

  /**
   * Create WebkitAudioContext
   *
   * @param {Integer} Number of array
   */
  createContext() {
    try {
      this.contexts.push(new AudioContext());
    } catch (e) {
      // console.log('catch');
    }
  },

  /**
   * Create WebkitAudioContext
   *
   * @param {Integer} Number of array
   * @param {String} File name
   */
  setFile(num, file) {
    var req = [];

    req[num] = new XMLHttpRequest();
    req[num].soundName = num;
    req[num].open('GET', 'dist/samples/' + file, true);
    req[num].responseType = 'arraybuffer';

    req[num].addEventListener('load', function(e) {
      Audio.setBuffer(e, num);
    }, false);

    req[num].send();
  },

  /**
   * Set buffer
   *
   * @param {Object} Request
   * @param {Integer} Number of context
   */
  setBuffer(e, i) {
    var req = e.target;
    try {
      this.buffers[req.soundName] = this.contexts[i].createBuffer(req.response, false);
    } catch (e) {
      // console.log('catch');
    }
  },

  /**
   * Set audio options
   *
   * Options: volume. Todo: delay, eq, pan, etc.
   *
   * @param {Integer} Number of array
   */
  setOptions(n) {
    var vol = this.contexts[n].createGainNode();

    this.sources[n] = this.contexts[n].createBufferSource();
    this.sources[n].buffer = this.buffers[n];

    this.sources[n].connect(vol);

    vol.connect(this.contexts[n].destination);
  },

  /**
   * Play audio
   *
   * @param {Integer} Number of array
   */
  play(n, loop) {
    this.setOptions(n);
    this.sources[n].loop = loop;
    this.sources[n].noteOn(0);
  },

  /**
   * Stop audio
   *
   * @param {Integer} Number of array
   */
  stop(n) {
    this.sources[n].noteOff(0);
  },

  /**
   * Refresh (rebind) audio
   */
  created: false,
  refresh() {
    // Clear
    Audio.contexts.length = 0;

    // For each audio element
    $('.audio').each(function(i) {
      var file = $(this).attr('data-file');

      // Create context...
      if (!this.created) {
        Audio.createContext(i);
      }

      // ...and set file
      Audio.setFile(i, file);
    });

    this.created = true;
  },

  refreshContext(file, i) {
    // Create context...
    // Audio.createContext(i);

    // ...and set file
    Audio.setFile(i, file);
  },

  /**
   * Init
   */
  init() {
    $(window).load(() => {
      Audio.refresh();
    });
  }
};

module.exports = Audio;
Audio.init();