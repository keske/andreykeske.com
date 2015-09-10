import React from 'react';
import $ from 'jquery';

// Component styles
import styles from './Place.styles.js';

export default class Place extends React.Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  contextTypes: {
    router: React.PropTypes.func
  }

  componentDidMount() {
    const { year, month, city } = this.props.params;

    const img = `./images/${year}/${month}/${city}`;
    const url = `./places/${year}/${month}/${city}/index.html`;

    $.get(url).done((data) => {
      this.setState({data: this.insertDataToTemplate(data, img, city)});
    }.bind(this));
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (<div className={ styles }>
        <div dangerouslySetInnerHTML={{ __html: data }} />
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

  insertDataToTemplate(data, img, city) {
    return data.replace(/{{url}}/g, img).replace(/{{city}}/g, city);
  }
}
