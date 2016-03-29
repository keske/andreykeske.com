import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <Grid className={styles}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            Versions:
            <a href="old/2014/">2014</a>
            <a href="old/2013-III/">2013 3.0</a>
            <a href="old/2013-II/">2013 2.0</a>
            <a href="old/2013-I/">2013 1.0</a>
            <a href="old/2012/">2012</a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
