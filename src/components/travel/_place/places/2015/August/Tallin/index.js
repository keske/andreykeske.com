import React, { Component } from 'react';
import reactMixin from 'react-mixin';

// Components
import placeInsertTemplate from './../../../../_placeInsertTemplate.js';
import NavFooter from './../../../../_navFooter/';

// Component styles
import styles from './styles.js';

@reactMixin.decorate(placeInsertTemplate)
export default class FlorenceInMay2015 extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { data } = this.state;
    const { year, month, city, language } = this.props.params;

    if (data) {
      return (<div className={ styles }>
        <div dangerouslySetInnerHTML={{ __html: data }} />
        <NavFooter style="white bottom-on-photo" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>);
    }

    return (
      <div className={ styles }>
        <h2>Loading...</h2>
      </div>
    );
  }

  state = {
    data: null,
  }
}