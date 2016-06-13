import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

// Song text
import { song } from './files/song.js';
// Utils
import {
  getSecond,
  getWord,
  getWordIndex,
  getWindowTop,
  getWindowLeft,
  getWindowWidth,
  getWindowHeight,
  debug,
} from './files/utils.js';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: PropTypes.object,
    language: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      windows: [],
    };
  }

  componentDidMount() {
    const { windows } = this.state;

    this.refs.audio.getDOMNode().addEventListener('timeupdate', () => {
      const second = getSecond();

      const word = getWord();
      const wordIndex = getWordIndex(second, word);

      const width = getWindowWidth(second);
      const height = getWindowHeight(second);

      const top = getWindowTop(second, word);
      const left = getWindowLeft(second, word);

      // windows[wordIndex].resizeTo(width, height);
      // windows[wordIndex].moveTo(top, left);
      // windows[wordIndex].focus();

      debug(top, left, word, wordIndex, second, width, height);
    });
  }

  render() {
    const { work } = this.props.params;
    const { ready } = this.state;

    // Path to photos
    const path = `./app/components/Content/Works/${work}/files`;

    // Application settings
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

    const metaData = {
      title: `${Language.translate('Title')} — ${Language.translate('Text')}`,
      description: Language.translate('Text'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Title'),
        },
      },
    };

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className={`
                col-xs-12
                col-sm-12
                col-md-8 col-md-offset-2
                col-lg-8 col-lg-offset-2
            `}
            >

              <h1>
                { Language.translate('Title') }
              </h1>
              <p>
                { Language.translate('Text') }
              </p>

              <audio ref="audio"
                src={ `${ path }/technologic.mp3`}
                ontimeupdate={ () => this.playScene() }
                controls= { ready ? 'controls' : '' }
                muted="false"
                disabled="disabled" />

              {
                !ready ? (
                  <div className="button inline blur medium blue"
                    onClick={ () => this.openAllWindows() }>
                    Start
                  </div>
                  ) : (
                  <div className="button outline inline blur small blue"
                    onClick={ () => this.closeAllWindows() }>
                    Close all windows
                  </div>
                )
              }

              { /*
                <div className="responsive-container">
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/oARU7GLKj3Y"
                    frameBorder="0" allowFullScreen />
                </div>
              */ }

            </div>
          </div>
        </div>
      </div>
    );
  }

  openAllWindows() {
    const { windows } = this.state;

    // song().map((word, index) => {
    //   windows[index] = window.open(
    //     word,
    //     word,
    //     'toolbar=yes,scrollbars=yes, resizable=yes, top=0, left=0, width=400, height=400'
    //   );
    // });

    // $(windows[song().length]).ready(() => {
    //   this.setState({
    //     ready: true,
    //   });
    // });

    this.setState({
      ready: true,
    });
  }

  closeAllWindows() {
    const { windows } = this.state;

    song().map((el, index) => {
      windows[index].close();
    });
  }
}
