import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col } from 'react-bootstrap';

// Components
import {
  Mark,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  SubTitle,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const styles = StyleSheet.create({
  col: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});

const IPadIcons: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col className={css(styles.col)} lg={{ offset: 2, span: 7 }}>
      <UploadcareImage src="https://ucarecdn.com/1ce5b127-bdcd-4459-89f9-fdfde13da28d/" />
    </Col>
    <Col className={css(styles.col)} lg={{ offset: 5, span: 6 }}>
      <UploadcareImage src="https://ucarecdn.com/9a4e78d7-599f-4b51-ad06-8736283fc2a0/" />
    </Col>
    <Col className={css(styles.col)} lg={{ offset: 6, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/fdb99690-68b0-47b8-9860-b8ae32ae4794/" />
    </Col>

    <Col className={css(styles.col)} lg={{ offset: 2, span: 10 }}>
      <Title>Invisible icons on the iPad</Title>
      <Text>
        I&#39;ve created 20 apps. Each imitating
        {' '}
        <Mark>transparency/absence</Mark>
        {' '}
        of the icon itself. But the
        icons are not transparent.
      </Text>

      <SubTitle>I achieved this in a simple manner</SubTitle>
      <ul>
        <li>
          I made screenshot of the iPad screen with and without icons
        </li>
        <li>Next I cutted regions containing background</li>
        <li>All this pieces I applied to apps</li>
        <li>
          Finally I&#39;ve compiled all the apps and placed in an
          certain order
        </li>
      </ul>
      <ProjectTopics topics={['Interface']} />
      <ProjectYear>2011</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default IPadIcons;
