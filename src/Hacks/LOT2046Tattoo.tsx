/* eslint react/jsx-one-expression-per-line: 0 */

import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const COLOR = '#5e5e5e';

const StyledCol = styled(Col)`
  padding: 20px 0;
`;

const StyledMark = styled(Mark)`
  border: 1px solid ${COLOR};
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid ${COLOR};
`;

const StyledText = styled(Text)`
  color: ${COLOR};
`;

const StyledTitle = styled(Title)`
  color: ${COLOR};
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  padding: 0;
`;

const LOT2046Tattoo: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <StyledCol lg={{ offset: 0, span: 10 }}>
          <UploadcareImage src="https://ucarecdn.com/58007ddf-42d7-4892-b431-713538b95b93/" />
        </StyledCol>

        <StyledCol lg={{ offset: 6, span: 5 }}>
          <UploadcareImage src="https://ucarecdn.com/a9e460fb-b621-4e60-9201-06c981ef4d68/" />
        </StyledCol>

        <StyledCol lg={{ offset: 2, span: 10 }}>
          <StyledTitle>LOT2046 Tattoo Machine</StyledTitle>

          <StyledText>
            Tattoo machine which I&#39;ve built from{' '}
            <a href="https://www.lot2046.com/">lot2046</a> products:
            <StyledMark>hair trimmer</StyledMark>
            and
            <StyledMark>toothbrush</StyledMark>
          </StyledText>
        </StyledCol>

        {/* <StyledCol
          lg={{ offset: 2, span: 3 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <UploadcareImage src="https://ucarecdn.com/74eebc30-354a-4b5d-86f0-9a45bd74c230/" />
        </StyledCol>
        <StyledCol
          lg={{ offset: 0, span: 6 }}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <UploadcareImage src="https://ucarecdn.com/f1615601-6fc7-4d05-bdfb-ee78632d451a/" />
        </StyledCol> */}

        <StyledCol
          lg={{ offset: 2, span: 10 }}
          sm={{ span: 6 }}
          xs={{ span: 6 }}
        >
          <ProjectTopics topics={['DIY', 'Ready Made']} />
          <StyledProjectYear>2019</StyledProjectYear>
        </StyledCol>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default LOT2046Tattoo;
