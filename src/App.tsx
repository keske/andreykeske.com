import * as React from 'react';

// Components
import { Title } from './components';

import Projects from './Projects';

function App(): JSX.Element {
  return (
    <>
      <Title>Works</Title>
      <Projects />
    </>
  );
}

export default App;
