import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

// Song text
import { song } from './files/song.js';

// End of song parts in seconds
const firstVerseEnd = 29;
const secondVerseEnd = 60;

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  componentDidMount() {
    const windows = [];

    // song().map((word, index) => {
    //   windows[index] = window.open(
    //     `https://www.google.ru/search?q=google+images&newwindow=1#newwindow=1&tbm=isch&q=${ word }`,
    //     word,
    //     'toolbar=yes,scrollbars=yes, resizable=yes, top=0, left=0, width=400, height=400'
    //   );
    // });

    // $(windows[windows.length]).ready(() => {
    //   // windows[0].focus();
    //   setTimeout(() => { this.playScene(windows); }, 0);
    // });

    this.refs.audio.getDOMNode().addEventListener('timeupdate', () => {
      const second = event.target.currentTime.toFixed(0);
      const word = ((event.target.currentTime * 1000).toFixed(0) / 475).toFixed(0);
      // const currentWord = second < 30 ? word : word - song().length;
      const currentWord = this.getCurrentWord(second, word);
      const width = this.getWindowWidth(second);
      const height = this.getWindowHeight(second);

      // const top = word % 1 || word % 2 ? 0 : screen.height / 2;
      // const left = word % 3 || word % 4 ? 0 : screen.width / 2;

      const top = this.getWindowTop(second, word);
      const left = this.getWindowLeft(second, word);

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

  getCurrentWord(second, word) {
    switch (true) {
    case (second < firstVerseEnd):
      return word;
    case (second < firstVerseEnd && second < secondVerseEnd):
      return word - song().length;
    default:
      return word;
    }
  }

  getWindowTop(second, word) {
    switch (true) {
    case (second < firstVerseEnd):
      return 0;
    case (second > firstVerseEnd && second < secondVerseEnd):
      return word % 1 || word % 2 ? 0 : screen.height / 2;
    default:
      return 0;
    }
  }

  getWindowLeft(second, word) {
    switch (true) {
    case (second < firstVerseEnd):
      return 0;
    case (second > firstVerseEnd && second < secondVerseEnd):
      return word % 3 || word % 4 ? 0 : screen.width / 2;
    default:
      return 0;
    }
  }

  getWindowWidth(second) {
    switch (true) {
    case (second < firstVerseEnd):
      return screen.width;
    case (second > firstVerseEnd && second < secondVerseEnd):
      return screen.width / 2;
    default:
      return 0;
    }
  }

  getWindowHeight(second) {
    switch (true) {
    case (second < firstVerseEnd):
      return screen.height;
    case (second > firstVerseEnd && second < secondVerseEnd):
      return screen.height / 2;
    default:
      return 0;
    }
  }

  render() {
    const { work } = this.props.params;

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
                controls muted="true" />

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

}
