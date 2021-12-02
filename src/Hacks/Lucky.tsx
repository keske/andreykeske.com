import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const StyledCol = styled(Col)`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Lucky: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 7, span: 4 }}>
          <UploadcareImage src="https://ucarecdn.com/71c74863-07d1-4d27-af99-3daa8cfa3f30/" />

          <Title>Lucky</Title>

          <Text>Oil on wood, 50x90cm</Text>

          <ProjectYear>2006</ProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Lucky;
