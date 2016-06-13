import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Utils
import { random } from '../../../../utils/math';
import { capitalizeFirstLetter } from '../../../../utils/strings';

// Component styles
import { styles } from './styles.scss';

const Preview = ({ language, work: { link, img } }) => {

  // Set language
  const locale = require(`../../../Content/Works/${link}/locale/${capitalizeFirstLetter(language)}.js`);

  const getOffset = () => random(1, 3);

  return (
    <Row className={styles}>
      <Link
        to={`/${language}/works/${link}`}
        key={`/${language}/works/${link}`}
      >
        <Col
          xs={12}
          sm={6}
          md={3} mdOffset={getOffset()}
          lg={3} lgOffset={getOffset()}
        >
          <img src={`./app/components/Content/Works/${link}/files/${img}`} />
        </Col>
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={4}
        >
          <span className="card">
            <h2 dangerouslySetInnerHTML={{ __html: locale.Title }} />
            { /* <p dangerouslySetInnerHTML={{ __html: locale.Text }} /> */ }
          </span>
        </Col>
      </Link>
    </Row>
  );
};

Preview.propTypes = {
  language: PropTypes.string,
  work: PropTypes.object,
};

export default Preview;
