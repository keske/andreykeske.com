import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: PropTypes.object,
    language: PropTypes.string,
  };

  render() {
    const { work } = this.props.params;

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

              <h1>
                { Language.translate('SlotMachines') }
              </h1>
              <p>
                { Language.translate('SlotMachinesText') }
              </p>

              <div className="responsive-container">
                <iframe src="//player.vimeo.com/video/40103163" width="500" height="313"
                  frameBorder="0"
                  webkitAllowFullscreen mozallowfullscreen allowFullScreen />
              </div>

              <h2>
                { Language.translate('SlotMachinesHow') }
              </h2>

              <ul>
                <li>
                  { Language.translate('SlotMachinesHowOpen') }
                  <br />
                  { Language.translate('SlotMachinesHowCd') }
                </li>
                <li>
                  { Language.translate('SlotMachinesHowOpenFolders') }
                  <br />
                  { Language.translate('SlotMachinesHowOpenFolders1') }
                  <br />
                  { Language.translate('SlotMachinesHowOpenFolders2') }
                  <br />
                  { Language.translate('SlotMachinesHowOpenFolders3') }
                </li>
                <li>
                  { Language.translate('SlotMachinesHowRun') }
                  <br />
                  { Language.translate('SlotMachinesHowStart') }
                </li>
              </ul>

              <p>
                { Language.translate('SlotMachinesNow') }
              </p>

              <h4>
                <a href={ `${ path }/slotmachine.zip` }>
                  { Language.translate('SlotMachinesDownload') }
                </a>
              </h4>

              <h1>
                { Language.translate('DiceGame') }
              </h1>

              <p>
                { Language.translate('DiceGameText') }
              </p>

              <div className="responsive-container">
                <iframe src="//player.vimeo.com/video/40102765" width="500" height="313"
                  frameBorder="0"
                  webkitallowfullscreen mozallowfullscreen allowFullScreen />
              </div>

              <h2>
                { Language.translate('DiceGameNow') }
              </h2>

              <ul>
                <li>
                  { Language.translate('DiceGameNowOpenFolder') }
                </li>
                <li>
                  { Language.translate('DiceGameNowOpenTerminal') }
                  <br />
                  { Language.translate('DiceGameNowTerminalCommand') }
                </li>
                <li>
                  { Language.translate('DiceGameNowRun') }
                </li>
                <li>
                  { Language.translate('DiceGameNowEach') }
                </li>
              </ul>

              <h4>
                <a href={ `${ path }/dicegame.zip` }>
                  { Language.translate('DiceGameDownload') }
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
