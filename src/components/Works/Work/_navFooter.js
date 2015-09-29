import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import { Link } from 'react-router';

@connect(state => state.works)
@connect(state => state.application)
export default class Works extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    works: React.PropTypes.array,
  }

  render() {
    const { application, works, work } = this.props;
    const workIndex = _.indexOf(works, _.findWhere(works, { 'link': work }));

    console.log(works.length);
    console.log(_.indexOf(works, _.findWhere(works, { 'link': work })));

    return (
      <div className={ `container nav-between-works` }>
        <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2 text-right">
              {
                workIndex > 0 ? (
                  <Link to={ `${ application.language }/works/${ works[workIndex - 1].link }` }>
                    <p className="prevNextWorks">
                      ← Prev work
                    </p>
                    <h3>
                      { works[workIndex - 1].title }
                    </h3>
                    <p>
                      { works[workIndex - 1].info }
                    </p>
                  </Link>
                ) : null
              }
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              {
                workIndex < works.length - 1 ? (
                  <Link to={ `${ application.language }/works/${ works[workIndex + 1].link }` }>
                    <p className="prevNextWorks">
                      Next work →
                    </p>
                    <h3>
                      { works[workIndex + 1].title }
                    </h3>
                    <p>
                      { works[workIndex + 1].info }
                    </p>
                  </Link>
                ) : null
              }
            </div>

        </div>
      </div>
    );
  }
}
