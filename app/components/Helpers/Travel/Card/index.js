import React from 'react';

// Components
import Large from './Large';
import Medium from './Medium';

const Card = place =>
  place.viewMode === 'large'
    ? <Large {...place} />
    : <Medium {...place} />;

export default Card;
