import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => state.application)
export default class Work extends Component {

  render() {
    return (
      <div className={ styles }>
        <div className="container nav-between-works">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2 text-right">
            <a href="#/">
              <p className="prevNextWorks">
                ← Prev work
              </p>
              <h3>
                title
              </h3>
              <p>
                info
              </p>
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <a href="#">
              <p className="prevNextWorks">
                Next work →
              </p>
              <h3>
                title
              </h3>
              <p>
                info
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

}
