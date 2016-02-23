import React from 'react';
import _ from 'underscore';
import { Link } from 'react-router';

// Component styles
import { styles } from './styles.scss';

const NavFooter = data => {

  const { application, works, work } = data;
  const workIndex = _.indexOf(works, _.findWhere(works, { 'link': work }));
  const prevWork = works[workIndex - 1];
  const nextWork = works[workIndex + 1];

  return (
    <section className={styles}>
      <div className="container">
        <div className="row">

            <div className="
              col-xs-6
              col-sm-6
              col-md-4 col-md-offset-2
              col-lg-4 col-lg-offset-2
              text-right"
            >
              {
                workIndex > 0 && (
                  <Link to={`/${application.language}/works/${prevWork.link}`}>
                    <p className="prevNextWorks">
                      ← Prev work
                    </p>
                    <h3>
                      {prevWork.title}</h3>
                    <p>
                      {prevWork.info}
                    </p>
                    <img src={`./app/components/Pages/Work/works/${prevWork.link}/files/${prevWork.img}`} />
                  </Link>
                )
              }
            </div>

            <div className="
              col-xs-6
              col-sm-6
              col-md-4
              col-lg-4"
            >
              {
                workIndex < works.length - 1 && (
                  <Link to={`/${application.language}/works/${nextWork.link}`}>
                    <p className="prevNextWorks">
                      Next work →
                    </p>
                    <h3>
                      {nextWork.title}
                    </h3>
                    <p>
                      {nextWork.info}
                    </p>
                    <img src={`./app/components/Pages/Work/works/${nextWork.link}/files/${nextWork.img}`} />
                  </Link>
                )
              }
            </div>

        </div>
      </div>
    </section>
  );
};

export default NavFooter;
