import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

// Utils
import { generateUrlToPlace, generateUrlToPostThumb } from '../../../../../utils/travel';
import { capitalizeFirstLetter } from '../../../../../utils/strings';

// Components
import NewLabel from '../../NewLabel';
import VisitedDate from '../../VisitedDate';

// Component styles
import { styles } from './styles.scss';

const Large = place => {

  // Set language
  const locale = require(`../../../../Content/Places/${place.year}/${place.month}/${place.city.replace(' ', '')}/locale/${capitalizeFirstLetter(place.language)}.js`);

  return (
    <Col
      className={`
        ${styles}
        ${place.className}
      `}
      xs={12}
      sm={12}
      md={8}
      lg={8}
    >
      <Link to={generateUrlToPlace(place)}>
        <div className={`data ${place.className}`}>
          <p className="city">
            {locale.City}
            <NewLabel {...place} />
          </p>
          <VisitedDate {...place} />
        </div>
        <span className="img-wrap">
          <img
            src={generateUrlToPostThumb(place)}
            role="presentation"
          />
        </span>
      </Link>
    </Col>);

};

export default Large;
