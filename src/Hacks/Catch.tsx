import * as React from 'react';
import * as R from 'ramda';

// Libs
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { mediaQuery } from '../utils';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Spacer,
  Text,
  Title,
} from '../components';

const { PUBLIC_URL } = process.env;

const Details = styled.div`
  opacity: 0.5;
`;

const Image = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  background-position: 0px -10px;
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  height: 260px;
  margin: 10px;
  width: calc(100% / 11 - 20px);

  ${mediaQuery(
    'desktop',
    css`
      display: inline-block;
    `,
  )}
`;

const StyledMark = styled(Mark)`
  border: 1px solid #fff;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  color: #fff;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid #fff;
`;

const StyledText = styled(Text)`
  color: #fff; ;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Catch: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ span: 8 }}>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/tCV8dwhAwf0"
            title="Catch"
          />

          <StyledTitle>The Catch</StyledTitle>

          <StyledText>
            The application icon in the dock is a trap from the
            <StyledMark>Ghostbusters</StyledMark>
          </StyledText>

          <StyledText>
            The window is a ghost. Window minimization represents a
            scene from the movie of catching a ghost
          </StyledText>

          <StyledText>
            Thanks: Andrey Smirny and Nikita Rokotyan
          </StyledText>

          <Details>
            <ProjectTopics topics={['Interface', 'Ready Made']} />
            <StyledProjectYear>2013</StyledProjectYear>
          </Details>
        </Col>
      </Row>
    </Container>

    <Spacer size={30} />

    {R.range(1, 12).map((index) => (
      <Image
        key={index}
        url={`${PUBLIC_URL}/static/catch/${index}.jpg`}
      />
    ))}
  </StyledProjectWrapper>
);

export default Catch;
