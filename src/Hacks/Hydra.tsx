import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Quote,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const Hydra: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 10 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/dT1l7jtfNWw"
        title="Hydra"
      />
      <Title>Hydra</Title>
      <Text>
        Hydra's head representation of regeneration trough UI
      </Text>
      <Quote link="https://en.wikipedia.org/wiki/Lernaean_Hydra">
        ...for every head chopped off, the Hydra would regrow two
        heads...
      </Quote>
      <ProjectTopics topics={['Interface', 'Mythology']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default Hydra;
