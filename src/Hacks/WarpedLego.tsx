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
  Title,
} from '../components';
import { mediaQuery } from '../utils';

import Lego from './WarpedLego/Root';

const Inner = styled.div`
  transform: translate(40px, -40px);
`;

const StyledProjectTopics = styled(ProjectTopics)`
  border-radius: 13px;
  display: inline-block;
`;

const StyledProjectYear = styled(ProjectYear)``;

const StyledTitle = styled(Title)`
  display: inline-block;
  font-size: 64px;
  width: 80%;

  ${mediaQuery(
    'phone',
    css`
      font-size: 34px;
    `,
  )}
`;

const Wrapper = styled.div`
  background-color: #f6ec36;
  overflow: hidden;
`;

const WarpedLego: React.FC = (): JSX.Element => (
  <Wrapper>
    <ProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <OnScreen>
              <Lego />
            </OnScreen>

            <Inner>
              <StyledTitle>
                Lego brick in &quot;non-euclidean&quot; geometry world
              </StyledTitle>

              <Spacer size={0} />

              <StyledProjectTopics topics={['Lego', 'ThreeJS']} />

              <Spacer />

              <StyledProjectYear>2021</StyledProjectYear>
            </Inner>
          </Col>
        </Row>
      </Container>
    </ProjectWrapper>
  </Wrapper>
);

export default WarpedLego;
