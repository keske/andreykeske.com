import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Title,
} from '../components';

const Hairpin: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 7 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/zaWOPkX4IpY"
            title="Haiping"
          />
          <Title>The hairpin</Title>
          <ProjectTopics topics={['Interface']} />
          <ProjectYear>2014</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Hairpin;
