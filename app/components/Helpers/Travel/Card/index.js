import React from 'react';

// Components
import Large from './Large';
import Medium from './Medium';

const Card = data =>
  data.place.viewMode === 'large'
    ? <Large {...data} />
    : <Medium {...data} />;

export default Card;
