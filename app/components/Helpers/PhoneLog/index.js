import React, { PropTypes } from 'react';

// Component styles
import { styles } from './styles.scss';

const PhoneLog = ({ log }) => (
  <section className={styles}>
    {log}
  </section>
);

PhoneLog.propTypes = {
  log: PropTypes.string,
};

export default PhoneLog;
