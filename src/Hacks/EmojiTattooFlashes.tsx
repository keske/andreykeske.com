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
  Title,
  UploadcareImage,
} from '../components';

const StyledCol = styled(Col)`
  padding: 20px 0;
`;

const EmojiTattooFlashes: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 1, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/68e01be8-2b39-40dd-b01e-376f79afdb83/" />
        </StyledCol>

        <StyledCol lg={{ offset: 5, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/ec833e03-ddce-469a-bcf3-949fa043a025/" />
        </StyledCol>

        <StyledCol lg={{ offset: 3, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/a8572a03-5dc2-48f5-9a6e-bfb3fabc35ab/" />
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/75a9fed1-642f-4e85-8ddb-987832341d51/" />
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 10 }}>
          <Title>Emoji Tattoo Flashes</Title>

          <ProjectDisciplines disciplines={['Graphic Design']} />
          <ProjectTopics topics={['Emoji', 'Tattoo']} />
          <ProjectYear>2017</ProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default EmojiTattooFlashes;
