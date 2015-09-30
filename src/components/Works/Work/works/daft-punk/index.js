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
      const currentWord = second < 30 ? word : word - song().length;
      const width = second < 30 ? screen.width : screen.width / 2;
      const height = second < 30 ? screen.height : screen.height / 2;

      const top = word % 1 || word % 2 ? 0 : screen.height / 2;
      const left = word % 3 || word % 4 ? 0 : screen.width / 2;

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
      // console.log(height);
    });
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
                controls />

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

  playScene() {
    console.log('time uodate');
    // console.log(event.target.currentTime);
    // song().map((word, index) => {
    //   setInterval(() => {
    //     console.log(word);
    //     console.log(windows);
    //   }, 1500);
    // });
    // windows[0].focus();
    // this.refs.audio.getDOMNode().play();
  }

  // myOnLoadedData() {
  //   const a = this.refs.audio.getDOMNode();
  //   a.play();
  // }

}
