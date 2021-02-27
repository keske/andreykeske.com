import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  SubTitle,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const EsherSwitchButton: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 3, span: 6 }}>
      <UploadcareImage src="https://ucarecdn.com/520d81d0-1ee7-45df-9171-30416d96a94d/" />
    </Col>
    <Col lg={{ offset: 1, span: 10 }}>
      <Title>Radio Button ⤻ Switch Transformation</Title>
      <Text>
        My implementation of Esher&rsquo;s infinity deep drawings to
        the language of the user interfaces
      </Text>
    </Col>
    <Col lg={{ offset: 1, span: 9 }}>
      <SubTitle>Insiration</SubTitle>
    </Col>
    <Col lg={{ offset: 1, span: 4 }}>
      <UploadcareImage src="https://ucarecdn.com/2800b37e-8afc-4ee4-aa38-3c9e8d36f968/" />
    </Col>
    <Col lg={{ span: 4 }}>
      <Text>
        Sky and Water I. M
        <br />
        C. Escher. 1938
        <br />
        <a href="https://en.wikipedia.org/wiki/Sky_and_Water_I">
          WIKI<sup>↗</sup>
        </a>
      </Text>
    </Col>
    <Col lg={{ offset: 1, span: 9 }}>
      <br />
      <br />
      <ProjectTopics topics={['UI']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default EsherSwitchButton;
