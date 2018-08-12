import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Styles
import s from './index.css';

export default () => (
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
            Do the impossible, see the invisible
          </div>
        </Col>
      </Row>
    </Grid>
  </section>
);
