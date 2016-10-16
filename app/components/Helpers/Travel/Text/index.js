import React from 'react';
import { Link } from 'react-router';

// Components
import NewLabel from '../NewLabel';
import VisitedDate from '../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Text = place => {

  const renderInner = () => (
    <span>
      <span className="city">
        {place.city}
      </span>
      <span className="date">
        <VisitedDate {...place} />
      </span>
      <NewLabel {...place} />
      <span className="devider">
        /
      </span>
    </span>
  );

  return (
    <span className={styles}>
      {
        place.cover
          ?
          <Link
            to={`/${place.language}/places/${place.year}/${place.month}/${place.city}`}
            className="name"
          >
            {renderInner()}
          </Link>
          : renderInner()
      }
    </span>
  );
};

export default Text;
