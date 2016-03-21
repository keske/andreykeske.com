import React from 'react';
import { Link } from 'react-router';

// Utils
import { showNewLabel } from '../../../../../utils/travel';

// Components
import NewLabel from '../../NewLabel';
import VisitedDate from '../../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Large = place =>
  <section className={`
    ${styles}
    ${place.class}
    col-xs-12
    col-sm-12
    col-md-6
    col-lg-6
  `}
  >
    <Link to={`/en/places/${place.year}/${place.month}/${place.city}`}>
      <div className={`data ${place.class}`}>
        <p className="city">
          {
            place.city
          }
          {
            showNewLabel(place.date) &&
              <NewLabel />
          }
        </p>
        <VisitedDate {...place} />
      </div>
      <span className="img-wrap">
        <img src={`./app/components/Content/Places/${place.year}/${place.month}/${place.city.replace(/ /g, '')}/images/thumb.jpg`} />
      </span>
    </Link>
  </section>;

export default Large;
