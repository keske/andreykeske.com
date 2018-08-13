import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import * as Works from './Works/';

import works from './works.const.js';

import './App.css';

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default () => (
  <section>
    <Grid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          mdOffset={3}
          lg={6}
          lgOffset={3}
        >
          <section className="works">
            {
              works.map((work) => {
                const component = [];

                work.link.split('-').map((word) => {
                  component.push(capitalizeFirstLetter(word));
                });

                return (
                  <section
                    key={work.link}
                    className="work"
                    data-link={work.link}
                  >
                    {
                      React.createElement(
                        Works[component.join('')],
                      )
                    }
                    <p className="devider">
                      ***
                    </p>
                  </section>
                );
              })
            }
          </section>
        </Col>
      </Row>
    </Grid>
  </section>
);
