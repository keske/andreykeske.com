import React, { PropTypes } from 'react';

// Styles
import s from './index.css';

const Component = ({ params }) => {
  const { year, month, city } = params;

  return (
    <div className={styles}>
      <iframe src={`./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/index.html`} />
    </div>);
};

Component.propTypes = {
  params: PropTypes.object,
};

export default Component;
