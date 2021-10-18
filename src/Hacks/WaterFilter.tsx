import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectDisciplines,
  ProjectTopics,
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

const WaterFilter: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 1, span: 7 }}>
          <UploadcareImage src="https://ucarecdn.com/2db57ca1-3de1-45aa-bb48-08c17eaa2433/" />
        </StyledCol>

        <StyledCol lg={{ offset: 5, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/d9922bd6-54c3-49ca-aa12-dc371d09cbca/" />
        </StyledCol>

        <Col lg={{ offset: 0, span: 12 }}>
          <Title>Eco problems with water</Title>

          <Text>
            Street installation. The water filter in an unusual
            situation
          </Text>

          <ProjectDisciplines disciplines={['Street Art']} />
          <ProjectTopics topics={['Eco', 'Social Commentary']} />
          <ProjectYear>2016</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default WaterFilter;
