import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import cx from 'classnames';

// Components
import ScrollView from 'components/Layout/ScrollView';
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

    // Fetch
    travel.get();
    works.get();

    window.addEventListener('scroll', this.hideNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNav);
  }

  hideNav = () => {
    this.setState({
      green: window.pageYOffset > 200 && !window.innerWidth < 640,
    });
  }

  handleSearch = (value) => {
    this.setState({
      search: { value },
    });
  }

  render() {
    const { app, works } = this.context;

    const types = ['all'];

    works.all.map((work) => {
      types.push(work.type);
    });

    return (
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
                    Array.from(new Set(types)).map((type, index) =>
                      type !== 'about' &&
                        <span
                          key={index}
                          className={cx(
                              s.type,
                              { [s.active]: type === app.type },
                            )}
                          onClick={() => {
                            app.changeType(type);
                          }}
                        >
                          {type}
                        </span>,
                    )
                  }
                  <hr />
                  {
                    works.all.map((work, index) =>
                      <span key={index}>
                        {
                          work.link === 'about' && <hr />
                        }
                        <a
                          href={`#${work.link}`}
                          className={cx(
                            { [s.hide]:
                              app.type !== 'all' &&
                              work.type !== app.type &&
                              work.type !== 'about',
                            },
                          )}
                        >
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
  }
}
