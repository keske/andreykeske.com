import React from 'react';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale';

const I = data => {

  // Set language
  Language.setLocale(data.application.language);

  return (
    <div className={styles}>
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        {
          Language.translate('title')
        }
      </div>
    </div>
  );
};

export default I;
