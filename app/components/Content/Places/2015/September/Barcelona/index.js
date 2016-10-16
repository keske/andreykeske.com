import React, { PropTypes } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

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
