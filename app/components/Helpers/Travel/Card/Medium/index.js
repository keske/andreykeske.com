import React from 'react';
import { Link } from 'react-router';

// Utils
import { showNewLabel } from '../../../../../utils/travel';

// Components
import NewLabel from '../../NewLabel';
import VisitedDate from '../../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Medium = data =>
  <section className={`
    ${styles}
    ${data.place.class}
    col-xs-12
    col-sm-12
    col-md-4
    col-lg-4
  `}
  >
    <Link to={`/${data.application.language}/places/${data.place.year}/${data.place.month}/${data.place.city}`}>
      <div className={`data ${data.place.class}`}>
        <p className="city">
          {
            data.place.city
          }
          {
            showNewLabel(data.place.date) &&
              <NewLabel />
          }
        </p>
        <VisitedDate {...data.place} />
      </div>
      <span className="img-wrap">
        <img src={`./app/components/Content/Places/${data.place.year}/${data.place.month}/${data.place.city.replace(/ /g, '')}/images/thumb.jpg`} />
      </span>
    </Link>
  </section>;

export default Medium;
