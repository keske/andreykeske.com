import React from 'react';
import { Link } from 'react-router';

import { showNewLabel } from '../../../../utils/travel';

// Components
import NewLabel from '../NewLabel';
import VisitedDate from '../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Text = data => {

  const renderInner = () => (
    <div className={`
      ${styles}
      year-${data.place.year}
      col-xs-12
      col-sm-12
      col-md-12
      col-lg-12
    `}
    >
      <div className={ 'data' }>
        {
          showNewLabel(data.place.date) &&
            <NewLabel />
        }
        <p className="city">
          { data.place.city }
        </p>
        <VisitedDate {...data.place} />
      </div>
    </div>
  );

  return (
    data.place.cover
      ? <Link to={`/${data.application.language}/places/${data.place.year}/${data.place.month}/${data.place.city}`}>
          {renderInner()}
        </Link>
      : renderInner()
  );
};

export default Text;
