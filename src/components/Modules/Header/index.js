import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Styles
import s from './index.css';

export default class Header extends Component {
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
              Andrey Keske
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
