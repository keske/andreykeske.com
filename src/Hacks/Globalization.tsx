import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectWrapper,
  ResponsiveFrame,
  Text,
  Title,
} from '../components';

const styles = StyleSheet.create({
  root: {
    filter: 'blur(13px)',
  },
});

const Globalization: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 7 }}>
      <div className={css(styles.root)}>
        <ResponsiveFrame
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55207280.68936508!2d-17.645922980156378!3d32.37667657045178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1451573511029"
          title="Globalization"
        />
      </div>
      <Title>Globalization</Title>
      <Text>The world when the boundaries are blurred</Text>
      <Mark>⇧ Try to swipe it ⇧</Mark>
    </Col>
  </ProjectWrapper>
);

export default Globalization;
