import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Utils
import { random } from '../../../../utils/math';

// Component styles
import { styles } from './styles.scss';

const Preview = data =>
  <Row className={styles}>
    <Link
      to={`/${data.language}/works/${data.work.link}`}
      key={`/${data.language}/works/${data.work.link}`}
    >
      <Col
        xs={12}
        sm={6}
        md={3} mdOffset={random(1, 3)}
        lg={3} lgOffset={random(1, 3)}
      >
        <img src={`./app/components/Content/Works/${data.work.link}/files/${data.work.img}`} />
      </Col>
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={4}
      >
        <span className="card">
          <h2>
            { data.work.title }
          </h2>
          <p>
            { data.work.info }
          </p>
        </span>
      </Col>
    </Link>
  </Row>;

export default Preview;
