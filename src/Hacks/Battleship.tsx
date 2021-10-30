import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from '../components';

const StyledTab = styled(Tab)`
  padding: 20px;
  text-align: center;
`;

const Battleship: React.FC = (): JSX.Element => {
  const length = 10;

  const letters: string[] = Array.from({ length }, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i),
  );

  const numbers: number[] = Array.from({ length }, (_, i) => i + 1);

  return (
    <ProjectWrapper>
      <Container>
        <Row>
          <Col lg={{ offset: 3, span: 5 }}>
            <Tabs defaultActiveKey={letters[0]}>
              {letters.map((letter) => (
                <Tab key={letter} eventKey={letter} title={letter}>
                  <Tabs
                    defaultActiveKey={numbers[numbers.length - 1]}
                  >
                    {numbers.map((number) => (
                      <StyledTab
                        key={`${letter}-${number}`}
                        eventKey={`${number}`}
                        title={number}
                      >
                        <input type="radio" />
                      </StyledTab>
                    ))}
                  </Tabs>
                </Tab>
              ))}
            </Tabs>

            <Title>Battleship</Title>

            <Text>
              Hardcore representation of classic game through
              <Mark>tabs</Mark>
            </Text>

            <ProjectTopics topics={['Interface']} />
            <ProjectYear>2012</ProjectYear>
          </Col>
        </Row>
      </Container>
    </ProjectWrapper>
  );
};

export default Battleship;
