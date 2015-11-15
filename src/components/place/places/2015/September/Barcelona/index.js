import React, { Component } from 'react';
// import R from 'ramda';

// Component styles
import styles from './styles.js';

/* images */
// const images = [];
// R.forEach(name =>
//   images.push(require(`./images/barcelona-2015-${ name }.jpg`)),
//   R.range(1, 10 + 1));

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loadedImages: false,
  //   };
  // }

  componentDidMount() {
    // images.map((image, key) => {
    //   const imageObj = new Image();
    //   imageObj.src = image;
    //   imageObj.addEventListener('load', () => {
    //     key + 1 === images.length
    //       ? this.setState({ loadedImages: true })
    //       : null;
    //   }, false);
    // });
  }

  render() {
    // const { loadedImages } = this.state;
    const { year, month, city } = this.props.params;

    return (
      <div className={ styles }>
        <iframe src={`./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/index.html`} />
      </div>);
  }
}
