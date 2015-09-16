import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

// Component styles
import styles from './Works.styles.js';

@connect(state => state.works)
export default class Works extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    works: React.PropTypes.array,
  }

  render() {
    const { language } = this.props.params;
    const { works } = this.props;

    return (
      <div className={ styles }>
        <div className="container">
          {
            works.map((work) => {
              return (
                <Link to={ `${ language }/works/${ work.link }` }>
                  <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-2 col-lg-offset-2">
                      <img src="." />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-5 col-lg-5">
                      <h2>
                        { work.title }
                      </h2>
                      <p>
                        { work.info }
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}
