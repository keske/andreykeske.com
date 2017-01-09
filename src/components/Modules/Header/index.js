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
              <div className={s.sign}>
                UI Hacking, Street Art, Net Art, Savvy & Wit
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
