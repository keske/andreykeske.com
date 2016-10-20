import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

// Utils
// import { random } from 'utils/random';

// Helpers
// import Module from 'components/Helpers/Module';
// import Search from 'components/Helpers/Search';

// Modules
// import TableOfContents from 'components/Modules/TableOfContents';
import Works from 'components/Modules/Works';

// Styles
import s from './index.css';

@observer
export default class Page extends Component {

  static contextTypes = {
    app: PropTypes.object,
    travel: PropTypes.object,
    works: PropTypes.object,
  };

  componentDidMount() {
    const { travel, works } = this.context;

    travel.get();
    works.get();
  }

  handleSearch = (value) => {
    this.setState({
      search: { value },
    });
  }

  render() {
    return (
      <section className={s.root}>
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <h1>
                About
              </h1>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col
              xs={12}
              sm={12}
              md={8} mdOffset={2}
              lg={8} lgOffset={2}
            >
              <Works />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
