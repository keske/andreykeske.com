import React from 'react';

import './index.css';

export default () => (
  <div>
    <h1>
      Google Street View vintage style
    </h1>
    <p>
      Black and white with sepia like old photo cards.
    </p>

    <div className="sepia">
      <iframe
      className="sepia"
        src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);
