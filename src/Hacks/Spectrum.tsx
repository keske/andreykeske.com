import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectDisciplines,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const Spectrum: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 10 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/I1nMNR8ntHM"
            title="Spectrum at browser bar"
          />
          <Title>Spectrum at browser bar</Title>
          <Text>
            Usually we have feedback from
            {' '}
            <Mark>browser bar</Mark>
            , such
            as URL or its anchors, but in my experiment I try to show how
            typical browser bar will
            {' '}
            <Mark>visualize sound spectrum</Mark>
          </Text>
          <ProjectDisciplines disciplines={['Programming']} />
          <ProjectTopics topics={['Interface']} />
          <ProjectYear>2013</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Spectrum;
