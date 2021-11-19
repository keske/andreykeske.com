/* eslint react/jsx-one-expression-per-line: 0 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  Button,
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';
import { mediaQuery } from '../utils';

const Inner = styled.div`
  bottom: 100px;
  position: absolute;
  width: 100%;

  ${mediaQuery(
    'phone',
    css`
      transform: translateY(300px);
    `,
  )}
`;

const StyledButton = styled(Button)`
  border: 2px solid #000;
  box-shadow: none;
  font-weight: bold;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-image: url('https://ucarecdn.com/62b9c3cc-b3a3-4be8-99c4-e50efdf33c82/');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 0;
  position: relative;
  width: 100vw;

  ${mediaQuery(
    'phone',
    css`
      background-size: 250%;
    `,
  )}
`;

const StyledTitle = styled(Title)`
  color: #000;
  font-size: 44px;
`;

const DistortingMirrors: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Link to="/distorting-mirrors">
      <Inner>
        <Container>
          <Row>
            <Col
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
            >
              <StyledTitle>
                ☺︎ 球面鏡 ☹︎ Distorting mirrors ☺︎
              </StyledTitle>

              <Text>
                I&apos;m still exploring the world of 3D in the
                browser. This time playing with the camera as well.
                <br />
                Also, they are <Mark>generated</Mark> in a new way
                each time when the page is reloaded.
                <Spacer size={3} />
                <Link to="/distorting-mirrors">
                  <StyledButton>Try it out</StyledButton>
                </Link>
                <Spacer size={5} />
                <ProjectTopics topics={['Generative', 'ThreeJS']} />
                <Spacer size={0} />
                <ProjectYear>2021</ProjectYear>
              </Text>
            </Col>
          </Row>
        </Container>
      </Inner>
    </Link>
  </StyledProjectWrapper>
);

export default DistortingMirrors;
