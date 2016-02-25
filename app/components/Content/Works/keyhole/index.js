import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import $ from 'jquery';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  };

  move() {
    // This is old code with jQuery.
    // TODO: jQuery -> JS
    const x = (event.pageX - $(event.target).offset().left) / ($(event.target).innerWidth()) * 100;
    const y = (event.pageY - $(event.target).offset().top) / ($(event.target).innerHeight()) * 100;

    $('.keyhole-girl img')
      .css('marginLeft', x * -0.9)
      .css('marginTop', y * -0.1);
  }

  render() {
    const { work } = this.props.params;

    // Path to photos
    const path = `./app/components/Content/Works/${work}/files`;

    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: `${ Language.translate('Title') } — ${ Language.translate('Text1') }`,
      description: Language.translate('Text1'),
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
                { Language.translate('Text1') }
                <br />
                { Language.translate('Text2') }
              </p>

              <div className="keyhole-girl keyhole-girl-center">
                <img src={`${path}/girl.png` } alt="Girl" ref="girl" />
              </div>

              <div className="keyhole keyhole-center"
                onMouseMove={ () => this.move() }>
                <img src={`${path}/keyhole.png` } alt="Keyhole" />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
