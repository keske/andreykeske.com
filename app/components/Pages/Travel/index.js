import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// View mode, card or text
import Filter from '../../Helpers/Travel/Filter';
import Card from '../../Helpers/Travel/Card';
import Text from '../../Helpers/Travel/Text';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

export default class Travel extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    places: React.PropTypes.array,
    application: React.PropTypes.object,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { language, mode } = this.props.params;
    const { places, application } = this.props;

    const metaData = {
      title: Language.translate('Travel'),
      description: Language.translate('Travel'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Travel'),
        },
      },
    };

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Filter mode={mode}
                {...this.props}
              />
            </div>
          </div>
          <div className="row">
            {
              places.map((place, index) => {
                const data = {
                  place,
                  language,
                  application,
                };

                return mode === 'card'
                  ?
                    <Card
                      {...data}
                      key={`card-${index}-${place.city}`}
                    />
                  :
                    <Text
                      {...data}
                      key={`text-${index}-${place.city}`}
                    />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}