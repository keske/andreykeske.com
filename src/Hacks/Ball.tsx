import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import { ProjectWrapper, ResponsiveFrame } from '../components';

const Ball: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 6 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/dT1l7jtfNWw"
        title="Ball"
      />
    </Col>
  </ProjectWrapper>
);

export default Ball;
