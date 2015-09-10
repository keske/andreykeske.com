import React from 'react';
import $ from 'jquery';

// Component styles
import styles from './Place.styles.js';

export default class Place extends React.Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  componentDidMount() {
    const { year, month, city } = this.props.params;

    // Path to photos
    const img = `./images/${year}/${month}/${city}`;

    // Template url
    const url = `./places/${year}/${month}/${city}/index.html`;

    // Get html data from file
    $.get(url).done((data) => {
      this.setState({
        // Replace photos urls and city name
        data: this.replaceDataInTemplate(data, img, city),
      });
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

  /*
   * Replace data in template
   *
   * Template has some code like {{url}} which
   * we have to replace to real photo url
   *
   * @param {String} html code
   * @param {String} path to image
   * @param {String} city name
   *
   * @return {String} html code
   */
  replaceDataInTemplate(data, img, city) {
    return data
      .replace(/{{url}}/g, img)
      .replace(/{{city}}/g, city);
  }
}
