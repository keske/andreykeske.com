import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Utils
import { capitalizeFirstLetter } from '../../../../utils/strings';

// Component styles
import { styles } from './styles.scss';

const StreetsPreview = ({ language, street: { title, img } }) => {

  // Set language
  const locale = require(`../../../Content/Streets/${title}/locale/${capitalizeFirstLetter(language)}.js`);

  return (
    <Row className={styles}>
      <Link
        to={`/${language}/streets/${title}`}
        key={`/${language}/streets/${title}`}
      >
        <Col
          xs={12}
          sm={6}
        >
          <img src={`./app/components/Content/Streets/${title}/files/${img}`} />
        </Col>
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={46}
        >
          <span className="card">
            <h2 dangerouslySetInnerHTML={{ __html: locale.Title }} />
          </span>
        </Col>
      </Link>
    </Row>
  );
};

StreetsPreview.propTypes = {
  language: PropTypes.string,
  street: PropTypes.object,
};

export default StreetsPreview;
