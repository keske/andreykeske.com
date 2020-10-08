import React from 'react';

// Libs
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <div>
      <Header label="false" />
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
