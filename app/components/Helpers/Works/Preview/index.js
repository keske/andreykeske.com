import React from 'react';
import { Link } from 'react-router';

// Component styles
import { styles } from './styles.scss';

const Preview = data => (
  <div className={`${styles} row`}>
    <Link
      to={`/${data.application.language}/works/${data.work.link}`}
      key={`/${data.application.language}/works/${data.work.link}`}
    >
      <div className="col-xs-12 col-md-6 col-md-4 col-lg-4">
        <img src={`./app/components/Content/Works/${data.work.link}/files/${data.work.img}`} />
      </div>
      <div className="col-xs-12 col-md-6 col-md-4 col-lg-4">
        <span className="card">
          <h2>
            {data.work.title}
          </h2>
          <p>
            {data.work.info}
          </p>
        </span>
      </div>
    </Link>
  </div>
);

export default Preview;
