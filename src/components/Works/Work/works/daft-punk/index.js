import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import $ from 'jquery';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

// Song text
import { song } from './files/song.js';
// Utils
import { getCurrentWord, getWindowTop, getWindowLeft, getWindowWidth, getWindowHeight } from './files/Utils.js';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      windows: [],
    };
  }

  componentDidMount() {
    // const { windows } = this.state;
    // $(windows[windows.length]).ready(() => {
    //   // windows[0].focus();
    //   setTimeout(() => { this.playScene(windows); }, 0);
    // });

    this.refs.audio.getDOMNode().addEventListener('timeupdate', () => {
      const second = event.target.currentTime.toFixed(0);
      const word = ((event.target.currentTime * 1000).toFixed(0) / 475).toFixed(0);

      const currentWord = getCurrentWord(second, word);
      const width = getWindowWidth(second);
      const height = getWindowHeight(second);

      const top = getWindowTop(second, word);
      const left = getWindowLeft(second, word);

      // console.log(top);
      // console.log(left);
      // console.log(word % 1);
      // console.log(word % 2);
      // console.log(word % 3);
      // console.log(word % 4);
      // console.log(song()[word]);
      // console.log(song()[currentWord]);
      // console.log(second);
      // console.log(currentWord);

      // console.log(width);
      console.log(height);
    });
  }

  render() {
    const { work } = this.props.params;
    const { ready } = this.state;

    // Path to photos
    const path = `./src/components/Works/Work/works/${ work }/files`;

    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: `${ Language.translate('Title') } — ${ Language.translate('Text') }`,
      description: Language.translate('Text'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Title'),
        },
      },
    };

    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
              col-md-offset-2 col-lg-offset-2">

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

    song().map((word, index) => {
      windows[index] = window.open(
        `empty`,
        word,
        'toolbar=yes,scrollbars=yes, resizable=yes, top=0, left=0, width=400, height=400'
      );
    });

    $(windows[song().length]).ready(() => {
      this.setState({
        ready: true,
      });
    });
  }

  closeAllWindows() {
    const { windows } = this.state;

    song().map((el, index) => {
      windows[index].close();
    });
  }
}
