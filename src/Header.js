import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Styles
import './index.css';

export default () => (
  <section className="header">
    <Grid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          Andrey Keske
          <div className="sign">
            Do the impossible, see the invisible
          </div>
        </Col>
      </Row>
    </Grid>
  </section>
);
