import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// View mode, card or text
import Filter from '../travelFilter';
import Card from '../travelCardView';
import Text from '../travelTextView';
import Soon from '../soon';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from '../../components/header/locale/';

export default class Travel extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    places: React.PropTypes.array,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { language, mode } = this.props.params;
    const { places } = this.props;

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

    const soonData = {
      title: 'New York',
      date: '21—28 November',
    };

    return (
      <div className={ styles }>
        <DocumentMeta { ...metaData } />
        <Soon { ...soonData } />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Filter mode={ mode }
                      { ...this.props } />
            </div>
          </div>
          <div className="row">
            {
              places.map((place, index) => {
                return (
                  mode === 'card' ?
                    <Card { ...this.props }
                          place={ place }
                          language={ language }
                          key={ `card-${ index }-${ place.city }` } />
                    :
                    <Text { ...this.props }
                          place={ place }
                          language={ language }
                          key={ `text-${ index }-${ place.city }` } />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
