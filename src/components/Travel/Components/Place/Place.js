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
    const url = `./places/${year}/${month}/${city}/index.html`;

    $.get(url).done((data) => {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    if (this.state.data) {
      return (<div className={ styles }>
        <div dangerouslySetInnerHTML={{__html: this.state.data}} />
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
