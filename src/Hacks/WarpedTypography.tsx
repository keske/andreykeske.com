/* eslint max-lines: 0 */

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
import RatioInput from './WarpedTypography/RatioInput';
import { mediaQuery } from '../utils';

import Alphabet from './WarpedTypography/Root';
import OffWhiteAir from './WarpedTypography/Air';
import OffWhiteAirLarge from './WarpedTypography/AirLarge';
import KeskeSample from './WarpedTypography/KeskeSample';
import OffWhiteSwoosh from './WarpedTypography/Swoosh';
import WarpedTitle from './WarpedTypography/Title';

const COLOR = '#f12089';

const Inner = styled.div`
  /* bottom: 100px; */
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const InnerOffWhite = styled.div`
  /* bottom: 100px; */
  position: absolute;
  transform: translateY(-5vw);
  width: 100%;
  z-index: 1;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #ccff00;
  /* height: 140vh; */
  position: relative;

  ${mediaQuery(
    'phone',
    css`
      margin-top: 200px;
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

const StyledTitleOffWhite = styled(Title)`
  border-radius: 13px;
  color: #fb5112;
  display: inline-block;
  font-size: 64px;
  padding: 13px 21px;
`;

const WarpedTypography: React.FC = (): JSX.Element => (
  <>
    <StyledProjectWrapper>
      <OnScreen>
        <Alphabet />
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
              <StyledTitle>
                Warped Helvetica
                <RatioInput />
              </StyledTitle>

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

      <Spacer size={100} />

      <OnScreen>
        <WarpedTitle />
      </OnScreen>

      {/* <Spacer size={100} /> */}
    </StyledProjectWrapper>
    <OnScreen>
      <OffWhiteAir />
      <OffWhiteSwoosh />
      <InnerOffWhite>
        <Container>
          <Row>
            <Col
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
            >
              <StyledTitleOffWhite>
                Warped Helvetica x
                <br />
                Nike Air Force 1 x
                <br />
                OffWhite
              </StyledTitleOffWhite>
            </Col>
          </Row>
        </Container>
      </InnerOffWhite>
      <OffWhiteAirLarge />
      <KeskeSample />
    </OnScreen>
  </>
);

export default WarpedTypography;
