import React from 'react';

import './index.css';

export default () => (
  <div>
    <h1>
      Globalization
    </h1>
    <p>
      The world when the boundaries are blurred.
    </p>

    <div className="map">
      <iframe
        className="blur"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55207280.68936508!2d-17.645922980156378!3d32.37667657045178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1451573511029"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);
