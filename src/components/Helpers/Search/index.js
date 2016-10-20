import React, { PropTypes } from 'react';
import cx from 'classnames';

// Styles
import s from './index.css';

const Search = ({ onChange, placeholder = 'Search' }) => (
  <input
    type="search"
    className={cx(
      s.root,
    )}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
