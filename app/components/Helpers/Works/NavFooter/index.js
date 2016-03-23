import React from 'react';
import _ from 'underscore';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

const NavFooter = data => {

  const { application, works, work } = data;

  // TODO: refactoring _ to R
  const workIndex = _.indexOf(works, _.findWhere(works, { link: work }));

  const prevWork = works[workIndex - 1];
  const nextWork = works[workIndex + 1];

  return (
    <section className={styles}>
      <Grid>
        <Row>
          <Col
            xs={6}
            sm={6}
            md={4} mdOffset={2}
            lg={4} lgOffset={2}
          >
            {
              workIndex > 0 && (
                <Link to={`/${application.language}/works/${prevWork.link}`}>
                  <p className="prevNextWorks">
                    ← Prev work
                  </p>
                  <h3>
                    { prevWork.title }</h3>
                  <p>
                    { prevWork.info }
                  </p>
                  <img src={`./app/components/Content/Works/${prevWork.link}/files/${prevWork.img}`} />
                </Link>
              )
            }
          </Col>

          <Col
            xs={6}
            sm={6}
            md={4}
            lg={4}
          >
              {
                workIndex < works.length - 1 && (
                  <Link to={`/${application.language}/works/${nextWork.link}`}>
                    <p className="prevNextWorks">
                      Next work →
                    </p>
                    <h3>
                      { nextWork.title }
                    </h3>
                    <p>
                      { nextWork.info }
                    </p>
                    <img src={`./app/components/Pages/Work/works/${nextWork.link}/files/${nextWork.img}`} />
                  </Link>
                )
              }
            </Col>

        </Row>
      </Grid>
    </section>
  );
};

export default NavFooter;
