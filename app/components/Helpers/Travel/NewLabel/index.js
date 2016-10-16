import React from 'react';

// Utils
import { showNewLabel } from '../../../../utils/travel';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale';

const NewLabel = place => {

  // Set language
  Language.setLocale(place.language);

  return showNewLabel(place.date)
    ? <span className={styles}>
        {Language.translate('title')}
    </span>
    : <span />;
};

export default NewLabel;
