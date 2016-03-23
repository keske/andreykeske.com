import React from 'react';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale';

const NewLabel = language => {

  // Set language
  Language.setLocale(language);

  return (
    <span className={`${styles} new`}>
      New
    </span>
  );
};

export default NewLabel;
