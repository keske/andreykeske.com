import React from 'react';
import R from 'ramda';

// Components
import Large from './Large';
import Medium from './Medium';

// Component styles
import { styles } from './styles.scss';

const Card = place =>
  <span className={styles}>
    {
      R.equals(place.viewMode, 'large')
        ? <Large {...place} />
        : <Medium {...place} />
    }
  </span>;

export default Card;
