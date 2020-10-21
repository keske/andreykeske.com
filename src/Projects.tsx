import * as React from 'react';

// Libs
import { Container } from 'react-bootstrap';

// Components
import * as Hacks from './Hacks';

const Projects: React.FC = (): JSX.Element => (
  <Container fluid>
    <Hacks.EnergyOrParticle />
  </Container>
);

export default Projects;
