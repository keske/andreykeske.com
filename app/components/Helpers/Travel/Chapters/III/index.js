import React from 'react';
import { Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale';

const III = data => {

  // Set language
  Language.setLocale(data.application.language);

  return (
    <Col
      xs={12}
      sm={12}
      md={4}
      lg={4}
      className={styles}
    >
      <p className="title">
        {
          Language.translate('title')
        }
      </p>
      <p className="description">
        {
          Language.translate('description')
        }
      </p>
    </Col>
  );
};

export default III;
