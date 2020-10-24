import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectWrapper,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const EnergyOrParticle: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 8 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/3m6k7IDz8Qw"
        title="Wave–particle duality"
      />
      <Title>Wave–particle duality</Title>
      <Text>
        Light behaves <Mark>as a wave and as a particle</Mark>,
        depending on the circumstances and the effect being observed
      </Text>
      <Text>
        <a href="https://lco.global/spacebook/light-particle/">
          <Button>Try it</Button>
        </a>
      </Text>
    </Col>
  </ProjectWrapper>
);

export default EnergyOrParticle;
