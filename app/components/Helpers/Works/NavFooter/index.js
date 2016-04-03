import React from 'react';
import R from 'ramda';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

const NavFooter = data => {

  const { language, works, work } = data;

  const workIndex = R.findIndex(R.propEq('link', work))(works);

  const prevWork = works[R.dec(workIndex, 1)];
  const nextWork = works[R.add(workIndex, 1)];

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
                <Link to={`/${language}/works/${prevWork.link}`}>
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
                <Link to={`/${language}/works/${nextWork.link}`}>
                  <p className="prevNextWorks">
                    Next work →
                  </p>
                  <h3>
                    { nextWork.title }
                  </h3>
                  <p>
                    { nextWork.info }
                  </p>
                  <img src={`./app/components/Content/Works/${nextWork.link}/files/${nextWork.img}`} />
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
