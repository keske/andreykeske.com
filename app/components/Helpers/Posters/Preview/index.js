import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Utils
import { capitalizeFirstLetter } from '../../../../utils/strings';

// Component styles
import { styles } from './styles.scss';

const PostersPreview = ({ language, poster: { link, img } }) => {

  // Set language
  const locale = require(`../../../Content/posters/${link}/locale/${capitalizeFirstLetter(language)}.js`);

  return (
    <Row className={styles}>
      <Link
        to={`/${language}/posters/${link}`}
        key={`/${language}/posters/${link}`}
      >
        <Col
          xs={12}
          sm={6}
        >
          <img src={`./app/components/Content/posters/${link}/files/${img}`} />
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

PostersPreview.propTypes = {
  language: PropTypes.string,
  poster: PropTypes.object,
};

export default PostersPreview;
