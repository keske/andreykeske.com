import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  ResponsiveFrame,
  Spacer,
  Text,
  Title,
} from '../components';

const Root = styled.div`
  filter: blur(13px);
`;

const Globalization: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 7 }}>
          <Root>
            <ResponsiveFrame
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55207280.68936508!2d-17.645922980156378!3d32.37667657045178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1451573511029"
              title="Globalization"
            />
          </Root>

          <Title>Globalization</Title>

          <Text>The world when the boundaries are blurred</Text>

          <Mark>⇧ Try to drag it ⇧</Mark>

          <Spacer size={6} />

          <ProjectTopics
            topics={['Interface', 'Ready Made', 'Social Commentary']}
          />
          <ProjectYear>2016</ProjectYear>
        </Col>
      </Row>
    </Container>
  </ProjectWrapper>
);

export default Globalization;
