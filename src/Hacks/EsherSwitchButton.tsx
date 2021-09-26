import * as React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  SubTitle,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const EsherSwitchButton: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/520d81d0-1ee7-45df-9171-30416d96a94d/" />
        </Col>

        <Col lg={{ span: 4 }}>
          <Title>Radio Button ⤻ Switch Transformation</Title>
          <Text>
            My implementation of Esher&rsquo;s infinity deep drawings to
            the language of the user interfaces
          </Text>

          <Spacer size={4} />

          <Row>
            <SubTitle>Insiration</SubTitle>

            <Spacer size={2} />

            <Col lg={{ span: 6 }}>
              <UploadcareImage src="https://ucarecdn.com/2800b37e-8afc-4ee4-aa38-3c9e8d36f968/" />
            </Col>

            <Col lg={{ span: 6 }}>
              <Text>
                Sky and Water I. M
                <br />
                C. Escher. 1938
                <br />
                <a href="https://en.wikipedia.org/wiki/Sky_and_Water_I">
                  wiki
                  <sup>↗</sup>
                </a>
              </Text>
            </Col>

            <Spacer size={8} />

            <Col lg={{ span: 9 }}>
              <ProjectTopics topics={['UI']} />
              <ProjectYear>2021</ProjectYear>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default EsherSwitchButton;
