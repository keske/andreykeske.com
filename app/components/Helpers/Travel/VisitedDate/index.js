import React from 'react';

// Utils
import { showStartDateMonth } from '../../../../utils/travel';
import { lowerFirstLetter } from '../../../../utils/strings';

// Language
import Language from '../../../../constants/locale/';

// Component styles
import { styles } from './styles.scss';

const VisitedDate = place => {

  // Set language
  Language.setLocale(place.language);

  return (
    <p className={`${styles} date`}>
      <span className="country">
        { Language.translate(lowerFirstLetter(place.country.replace(' ', ''))) }
      </span>
      <br />
      { showStartDateMonth(place.start, place.end) }
      {
        place.end && <span>..{place.end}</span>
      }
    </p>
  );
};

export default VisitedDate;
