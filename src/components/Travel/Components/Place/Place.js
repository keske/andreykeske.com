import React, { Component } from 'react';

// Component styles
import styles from './Place.styles.js';

export default class Place extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  contextTypes: {
    router: React.PropTypes.func
  }

  componentDidMount() {
    // from the path `/inbox/messages/:id`
    const year = this.props.params.year;
    const month = this.props.params.month;
    const city = this.props.params.city;
    console.log(year);
    console.log(month);
    console.log(city);
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message });
    // })
  }

  render() {
    return (
      <div className={ styles }>
        asd
      </div>
    );
  }
}
