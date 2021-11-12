import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
  UploadcareImage,
} from '../components';
import { mediaQuery } from '../utils';

const StyledContainer = styled(Container)`
  position: absolute;
  top: 200px;
  width: 100%;

  ${mediaQuery(
    'phone',
    css`
      position: relative;
      top: 0px;
    `,
  )}
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  margin-top: 0;
  padding-top: 0;
  position: relative;
`;

const StyledProjectTopics = styled(ProjectTopics)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  display: inline-block;
  opacity: 1;
  padding: 7px 13px;

  ${mediaQuery(
    'phone',
    css`
      padding: 0;
    `,
  )}
`;

const StyledProjectYear = styled(ProjectYear)`
  backdrop-filter: blur(21px);
  border: none;

  ${mediaQuery(
    'phone',
    css`
      padding: 0;
    `,
  )}
`;

const StyledText = styled(Text)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  display: inline-block;
  padding: 13px 21px;

  ${mediaQuery(
    'phone',
    css`
      padding: 0;
    `,
  )}
`;

const StyledTitle = styled(Title)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  display: inline-block;
  font-size: 64px;
  padding: 13px 21px;

  ${mediaQuery(
    'phone',
    css`
      padding: 0;
    `,
  )}
`;

const MandelbrotSet: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <UploadcareImage src="https://ucarecdn.com/3691298d-b2d6-4b07-bf4c-5319f8947739/" />

    <StyledContainer>
      <Row>
        <Col lg={{ offset: 2, span: 10 }}>
          <StyledTitle>Mandelbrot set</StyledTitle>

          <Spacer size={0} />

          <StyledText>
            The fractal geometry built from the Radio Button elements
          </StyledText>

          <Spacer size={0} />

          <Link to="/mandelbrot-set">
            <Button>Try it out →</Button>
          </Link>

          <Spacer size={6} />

          <StyledProjectTopics
            topics={['Interface', 'Mathematics']}
          />

          <Spacer size={0} />

          <StyledProjectYear>2021</StyledProjectYear>
        </Col>
      </Row>
    </StyledContainer>
  </StyledProjectWrapper>
);

export default MandelbrotSet;
