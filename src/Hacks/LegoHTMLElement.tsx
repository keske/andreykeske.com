import * as React from 'react';
import * as R from 'ramda';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
} from '../components';

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 4,
    fontStyle: 'italic',
    marginLeft: -22,
    marginTop: 7,
    position: 'absolute',
  },
  root: {
    backgroundColor: '#35da35',
    border: 'none',
    borderRadius: 15,
    padding: 10,
  },
});

const LegoHTMLElement: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 2, span: 7 }}>
      <Title>Lego HTML Element</Title>
      <Text>
        A classical Lego brick except that this one was made from HTML
        elements <Mark color="#35da35">button</Mark> and{' '}
        <Mark color="#35da35">input</Mark>
      </Text>
      <button className={css(styles.root)} type="button">
        {R.range(0, 8).map((index) => (
          <span key={index}>
            <input
              checked
              className={css(styles.input)}
              type="radio"
            />
            <span className={css(styles.label)}>LEGO</span>
            {index === 3 && <br />}
          </span>
        ))}
      </button>
      <br />
      <br />
      <ProjectTopics topics={['Lego', 'UI']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default LegoHTMLElement;
