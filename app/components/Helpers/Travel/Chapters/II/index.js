import React from 'react';
import { Col } from 'react-bootstrap';

// Component styles
import { styles } from '../styles.scss';

// Language
import Language from './locale';

const II = data => {

  // Set language
  Language.setLocale(data.params.language);

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

export default II;
