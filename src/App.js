import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import * as Works from './Works/';
import ScrollView from './ScrollView';

import works from './works.const.js';

import './App.css';

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default class App extends Component {
  render() {
    return (
      <section className="root">
        <div className="nav">
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
                    works.map((work) => (
                      <span key={work.link}>
                        {
                          work.link === 'about' && <hr />
                        }
                        <a href={`#${work.link}`}>
                          {
                            work.title
                          }
                        </a>
                      </span>
                    ))
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
              md={7}
              mdOffset={4}
              lg={7}
              lgOffset={4}
            >
              <div className="work">
                <Works.EmojiBack />
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
