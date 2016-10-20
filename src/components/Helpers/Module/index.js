import React, { PropTypes } from 'react';
import cx from 'classnames';

// Styles
import s from './index.css';

const Module = ({ className, name, onClick }) => (
  <span
    className={cx(
      s.root,
      className,
    )}
    onClick={onClick}
  >
    {name}
  </span>
);

Module.propTypes = {
  className: PropTypes.any,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Module;
