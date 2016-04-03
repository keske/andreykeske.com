import React from 'react';

// Utils
import { showStartDateMonth } from '../../../../utils/travel';

// Component styles
import { styles } from './styles.scss';

const VisitedDate = place => (
  <p className={`${styles} date`}>
    <span className="country">
      { place.country }
    </span>
    <br />
    { showStartDateMonth(place.start, place.end) }
    {
      place.end && <span>..{place.end}</span>
    }
  </p>
);

export default VisitedDate;
