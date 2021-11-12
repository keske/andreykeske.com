import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  OnScreen,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';
import { mediaQuery } from '../utils';

import Root from './WarpedTypography/Root';

const COLOR = '#f12089';

const Inner = styled.div`
  bottom: 100px;
  pointer-events: none;
  position: absolute;
  width: 100%;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #ccff00;
  height: 140vh;
  position: relative;

  ${mediaQuery(
    'phone',
    css`
      display: none;
    `,
  )}
`;

const StyledProjectTopics = styled(ProjectTopics)`
  border-radius: 13px;
  color: ${COLOR};
  display: inline-block;
  opacity: 1;
  padding: 7px 21px;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: none;
  color: ${COLOR};
  padding: 7px 21px;
`;

const StyledText = styled(Text)`
  border-radius: 13px;
  color: ${COLOR};
  display: inline-block;
  padding: 13px 21px;
`;

const StyledTitle = styled(Title)`
  border-radius: 13px;
  color: ${COLOR};
  display: inline-block;
  font-size: 64px;
  padding: 13px 21px;
`;

const WarpedTypography: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <OnScreen>
      <Root />
    </OnScreen>

    <Inner>
      <Container>
        <Row>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <StyledTitle>Warped Helvetica</StyledTitle>

            <Spacer size={0} />

            <StyledText>
              Code-generated alphabet letters which warped in 3
              dimensions.
            </StyledText>

            <Spacer size={1} />

            <StyledProjectTopics topics={['Helvetica', 'Warped']} />
            <Spacer size={0} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default WarpedTypography;
