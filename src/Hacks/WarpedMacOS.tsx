import * as React from 'react';

// Libs
import styled from 'styled-components';
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

import MacOS from './WarpedMacOS/Root';

const Inner = styled.div`
  bottom: 200px;
  pointer-events: none;
  position: absolute;
  width: 100%;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  height: 120vh;
  position: relative;
`;

const StyledProjectTopics = styled(ProjectTopics)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  color: #fff;
  display: inline-block;
  opacity: 1;
  padding: 7px 21px;
`;

const StyledProjectYear = styled(ProjectYear)`
  backdrop-filter: blur(21px);
  border: none;
  color: #fff;
  padding: 7px 21px;
`;

const StyledText = styled(Text)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  color: #fff;
  display: inline-block;
  padding: 13px 21px;
`;

const StyledTitle = styled(Title)`
  backdrop-filter: blur(21px);
  border-radius: 13px;
  color: #fff;
  display: inline-block;
  padding: 13px 21px;
`;

const WarpedMacOS: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <OnScreen>
      <MacOS />
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
            <StyledTitle>Mac OS</StyledTitle>

            <Spacer size={0} />

            <StyledText>
              The flat interface of the Mac OS transformed into a
              warped surreal world
            </StyledText>

            <Spacer size={1} />

            <StyledProjectTopics topics={['MacOS', 'UI']} />
            <Spacer size={0} />
            <StyledProjectYear>2021</StyledProjectYear>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default WarpedMacOS;
