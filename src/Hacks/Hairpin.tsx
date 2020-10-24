import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  ResponsiveFrame,
  Title,
} from '../components';

const Hairpin: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 7 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/zaWOPkX4IpY"
        title="Haiping"
      />
      <Title>The hairpin</Title>
    </Col>
  </ProjectWrapper>
);

export default Hairpin;
