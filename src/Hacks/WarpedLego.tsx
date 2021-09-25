import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import { ProjectTopics, ProjectYear, Title } from '../components';
import { mediaQuery } from '../utils';

import Lego from './WarpedLego/Root';

const Inner = styled.div`
  transform: translate(40px, -40px);
`;

const StyledProjectTopics = styled(ProjectTopics)`
  background-color: #fff;
  border-radius: 13px;
  display: inline-block;
  opacity: 1;
  padding: 7px 13px;
`;

const StyledProjectYear = styled(ProjectYear)`
  background-color: #fff;
  border: 1px solid #fff;
`;

const StyledTitle = styled(Title)`
  background-color: #fff;
  border-radius: 13px;
  display: inline-block;
  padding: 13px 21px;
  width: 80%;

  ${mediaQuery(
    'greaterThanTablet',
    css`
      width: auto;
    `,
  )}
`;

const Wrapper = styled.div`
  background-color: #f6ec36;
  border-radius: 50px;
  overflow: hidden;
`;

const WarpedLego: React.FC = (): JSX.Element => (
  <Container>
    <Row>
      <Col lg={{ span: 12 }}>
        <Wrapper>
          <Lego />
          <Inner>
            <StyledTitle>
              Lego brick in non-euclidean geometry world
            </StyledTitle>
            <br />
            <StyledProjectTopics
              topics={['Lego', 'Non-euclidean geometry', 'ThreeJS']}
            />
            <br />
            <StyledProjectYear>2021</StyledProjectYear>
          </Inner>
        </Wrapper>
      </Col>
    </Row>
  </Container>
);

export default WarpedLego;
