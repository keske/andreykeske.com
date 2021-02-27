import * as React from 'react';

// Libs
import Switch from 'react-ios-switch';
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
  root: {
    ':active': {
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
    },
    backgroundColor: '#F2F2F2',
    border: 'none',
    borderRadius: 15,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    color: '#999',
    height: 70,
    paddingLeft: 60,
    width: 200,
  },
  switch: {
    marginLeft: -170,
    marginTop: 20,
    position: 'absolute',
  },
});

const SwitchInButton: React.FC = (): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <ProjectWrapper>
      <Col lg={{ offset: 2, span: 7 }}>
        <Title>Switch In Button</Title>
        <Text>
          Experimental button component with <Mark>Switch</Mark>{' '}
          inside it that disable or enable that button. This button
          can be used in forms when you have to confirm or agree with
          the license, for example.
        </Text>
        <button
          className={css(styles.root)}
          disabled={!checked}
          onClick={() => {
            alert('Clicked!');
          }}
          type="button"
        >
          Confirm
        </button>
        <Switch
          checked={checked}
          className={css(styles.switch)}
          onChange={(_) => {
            setChecked(_);
          }}
        />
        <br />
        <br />
        <ProjectTopics topics={['UI']} />
        <ProjectYear>2021</ProjectYear>
      </Col>
    </ProjectWrapper>
  );
};

export default SwitchInButton;
