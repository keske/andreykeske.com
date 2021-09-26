import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

import Sphere from './BTCBubble/Root';

const Inner = styled.div`
  transform: translate(0, -80px);
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  color: #000;
`;

const StyledProjectTopics = styled(ProjectTopics)`
  color: #fff;
  opacity: 1;
`;

const StyledProjectYear = styled(ProjectYear)`
  background-color: #fff;
  border: 1px solid #fff;
`;

const StyledText = styled(Text)`
  border-radius: 13px;
  color: #fff;
`;

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Root = styled.div`
  background-color: #000;
`;

const BTCBubble: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Root>
      <Sphere />
      <Inner>
        <Container>
          <Row>
            <Col lg={{ offset: 2, span: 10 }}>
              <StyledTitle>BTC Bubble</StyledTitle>
              <StyledText>
                The current project is about the social opinion that
                Bitcoin is a bubble and text inside it is the current
                BTC&#39;s course.
              </StyledText>
              <a href="https://btc-bubble.vercel.app">
                <StyledButton>Open Site →</StyledButton>
              </a>
              <Spacer size={8} />
              <StyledProjectTopics topics={['Social Commentary']} />
              <StyledProjectYear>2021</StyledProjectYear>
            </Col>
          </Row>
        </Container>
      </Inner>
    </Root>
  </ProjectWrapper>
);

export default BTCBubble;
