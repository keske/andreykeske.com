import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

const Preview = data => (
  <div className={`${styles} row`}>
    <Link
      to={`/${data.application.language}/works/${data.work.link}`}
      key={`/${data.application.language}/works/${data.work.link}`}
    >
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={4}
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
            {data.work.title}
          </h2>
          <p>
            {data.work.info}
          </p>
        </span>
      </Col>
    </Link>
  </div>
);

export default Preview;
