import * as React from 'react';
import * as R from 'ramda';
import styled, { css } from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';
import { mediaQuery } from '../utils';

const COLORS = ['#1E601E', '#039CBD', '#CA1F08', '#F3C305'];

const Button = styled.button<{ color: string; margin?: 0 }>`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 15px;
  margin: ${({ margin }) => `${margin}px`};
  padding: 10px;
`;

const Buttons = styled.div`
  background-color: #000;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const ButtonsInner = styled.div`
  height: 200vh;
  transform: rotate(15deg) translateX(-15vw);
  width: 200vw;

  ${mediaQuery(
    'phone',
    css`
      transform: rotate(15deg) translateX(-65vw);
    `,
  )}
`;

const Input = styled.input`
  margin: 0 10px;
`;

const Inner = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: 20px 50px 50px 50px;

  ${mediaQuery(
    'phone',
    css`
      padding: 1px 20px 20px 20px;
    `,
  )}
`;

const Label = styled.span`
  font-size: 4px;
  font-style: italic;
  margin-left: -22px;
  margin-top: 7px;
  position: absolute;
`;

const StyledContainer = styled(Container)`
  transform: translateY(-50vh);
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  height: 100vh;
  overflow: hidden;
  padding: 0;
  width: 100vw;
`;

const LegoHTMLElement: React.FC = (): JSX.Element => {
  const random = (min = 0, max: number) =>
    Math.random() * (max - min) + min;

  const renderButton = React.useCallback((margin = 0) => {
    const color = COLORS[Math.floor(random(0, COLORS.length))];

    return (
      <Button color={color} margin={margin} type="button">
        {R.range(0, 8).map((index) => (
          <span key={index}>
            <Input checked type="radio" />
            <Label>LEGO</Label>
            {index === 3 && <br />}
          </span>
        ))}
      </Button>
    );
  }, []);

  return (
    <StyledProjectWrapper>
      <Buttons>
        <ButtonsInner>
          {R.range(0, 198).map(() => renderButton(20))}
        </ButtonsInner>
      </Buttons>
      <StyledContainer>
        <Row>
          <Col lg={{ offset: 2, span: 7 }}>
            <Inner>
              <Title>Lego HTML Element</Title>

              <Text>
                A classical Lego brick except that this one was made
                from HTML elements
                <Mark>button</Mark>
                and
                <Mark>input</Mark>
              </Text>

              {renderButton()}

              <Spacer size={6} />

              <ProjectTopics topics={['Lego', 'UI']} />
              <ProjectYear>2021</ProjectYear>
            </Inner>
          </Col>
        </Row>
      </StyledContainer>
    </StyledProjectWrapper>
  );
};

export default LegoHTMLElement;
