import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectYear,
  Text,
  Title,
} from '../components';

import Sphere from './EsherSphere/Root';

const StyledContainer = styled(Container)`
  padding-bottom: 115px;
`;

const EsherSphere: React.FC = (): JSX.Element => (
  <>
    <Sphere />

    <StyledContainer fluid>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <Title>EsherSphere</Title>

          <Text>EsherSphere</Text>

          <ProjectTopics topics={['Social Commentary']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </StyledContainer>
  </>
);

export default EsherSphere;
