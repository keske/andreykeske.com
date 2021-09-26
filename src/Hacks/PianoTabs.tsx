import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const PianoTabs: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 1, span: 10 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/w1VXptRjxyU"
            title="Spectrum at browser bar"
          />

          <Title>Tabs as the piano keys</Title>

          <Text>
            Once I woke up in the middle of night cause I got an idea:
            &#34;what if tabs in browser were like the piano keys?&#34;. I
            wrote the thought down in Asana and got back to sleep
          </Text>

          <Text>
            In the morning I felt less enthusiastic about this idea until
            i realized that
            {' '}
            <Mark>
              Google Chrome actually has hotkeys for changing tabs
            </Mark>
            . The process of switching tabs resembles playing a piano and
            makes tabs a perfect musical instrument! Every tab has a music
            tone assigned. Seven tabs is one octave
          </Text>

          <ProjectTopics topics={['Interface']} />
          <ProjectYear>2015</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default PianoTabs;
