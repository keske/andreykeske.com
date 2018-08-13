// @flow

import React from 'react';

// Styles
import './index.css';

type Props = {
  children: React.DOM,
};

export default ({ children }: Props) => (
  <section
    className="scrollview"
    style={{
      height: window.innerHeight - 100,
    }}
  >
    {
      children
    }
  </section>
);
