import * as React from 'react';
import * as R from 'ramda';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
} from '../components';

const Input = styled.input`
  margin: 0 10px;
`;

const Label = styled.span`
  font-size: 4px;
  font-style: italic;
  margin-left: -22px;
  margin-top: 7px;
  position: absolute;
`;

const Root = styled.button`
  background-color: #35da35;
  border: none;
  border-radius: 15px;
  padding: 10px;
`;

const LegoHTMLElement: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 7 }}>
          <Title>Lego HTML Element</Title>

          <Text>
            A classical Lego brick except that this one was made from
            HTML elements
            <Mark>button</Mark>
            and
            <Mark>input</Mark>
          </Text>

          <Root type="button">
            {R.range(0, 8).map((index) => (
              <span key={index}>
                <Input checked type="radio" />
                <Label>LEGO</Label>
                {index === 3 && <br />}
              </span>
            ))}
          </Root>

          <Spacer size={6} />

          <ProjectTopics topics={['Lego', 'UI']} />
          <ProjectYear>2021</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default LegoHTMLElement;
