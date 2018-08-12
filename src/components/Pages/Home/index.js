import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import ScrollView from 'components/Layout/ScrollView';
import Works from 'components/Modules/Works';

import works from '../../../constants/works';

// Styles
import s from './index.css';

export default () => (
  <section className={s.root}>
    <div className={s.nav}>
      <Grid>
        <Row>
          <Col
            xsHidden
            smHidden
            md={4}
            lg={4}
          >
            <ScrollView>
              {
                works.map((work, index) =>
                  <span key={index}>
                    {
                      work.link === 'about' && <hr />
                    }
                    <a href={`#${work.link}`}>
                      {work.title}
                    </a>
                  </span>,
                )
              }
            </ScrollView>
          </Col>
        </Row>
      </Grid>
    </div>
    <Grid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={7} mdOffset={4}
          lg={7} lgOffset={4}
        >
          <Works />
        </Col>
      </Row>
    </Grid>
  </section>
);
