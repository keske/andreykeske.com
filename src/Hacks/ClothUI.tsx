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
  Text,
  Title,
} from '../components';
import { mediaQuery } from '../utils';

const FONT_COLOR = '#FFFFFF';

const Details = styled.div`
  bottom: 40px;
  position: absolute;
  text-align: left;
  width: 100%;
`;

const Frame = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const FrameWrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  text-align: center;

  ${mediaQuery(
    'phone',
    css`
      display: none;
    `,
  )}
`;

const StyledProjectTopics = styled(ProjectTopics)`
  color: ${FONT_COLOR};
  opacity: 0.7;
`;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid ${FONT_COLOR};
  color: ${FONT_COLOR};
  opacity: 0.7;
`;

const StyledText = styled(Text)`
  color: ${FONT_COLOR};
`;

const StyledTitle = styled(Title)`
  color: ${FONT_COLOR};
  font-size: 64px;
`;

const ClothUI: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <OnScreen>
      <FrameWrapper>
        <Frame
          allowFullScreen
          frameBorder="0"
          src="http://localhost:3000/static/cloth/"
          title="Cloth"
        />

        <Details>
          <Container>
            <Row>
              <Col lg={{ offset: 0, span: 12 }}>
                <StyledTitle>Cloth User Interface</StyledTitle>
                <StyledText>
                  No more plain and static windows
                </StyledText>

                <StyledProjectTopics
                  topics={['Inerface', 'Mac OS']}
                />
                <StyledProjectYear>2021</StyledProjectYear>
              </Col>
            </Row>
          </Container>
        </Details>
      </FrameWrapper>
    </OnScreen>
  </StyledProjectWrapper>
);

export default ClothUI;
