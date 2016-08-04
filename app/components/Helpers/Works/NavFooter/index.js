import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import R from 'ramda';

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
            lg={4} mdOffset={2}
            className="left-side"
          >
            {
              workIndex > 0 && (
                <Link to={`/${language}/works/${prevWork.link}`}>
                  <p className="prevNextWorks">
                    ← Prev work
                  </p>
                  <h3>
                    { prevWork.title }
                  </h3>
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
            className="right-side"
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

NavFooter.propTypes = {
  data: PropTypes.object,
};

export default NavFooter;
