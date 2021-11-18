import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import { OnScreen, ProjectWrapper, Title } from '../components';
import { mediaQuery } from '../utils';

import MacOS from './Abstraction/Root';

const Inner = styled.div`
  bottom: 100px;
  pointer-events: none;
  position: absolute;
  width: 100%;
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  padding: 0;
  position: relative;

  /* ${mediaQuery(
    'phone',
    css`
      display: none;
    `,
  )} */
`;

const StyledTitle = styled(Title)`
  color: #000;
  font-size: 44px;
`;

const DistortingMirrors: React.FC = (): JSX.Element => (
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
            <StyledTitle>
              ☺︎ 球面鏡 ☹︎ Distorting mirrors ☺︎
            </StyledTitle>
          </Col>
        </Row>
      </Container>
    </Inner>
  </StyledProjectWrapper>
);

export default DistortingMirrors;
