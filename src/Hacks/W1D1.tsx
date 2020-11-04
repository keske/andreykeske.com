import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  Mark,
  ProjectDisciplines,
  ProjectRoles,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const W1D1: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 1, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/3879cdce-7f98-4462-a8aa-512c7e5509f2/" />
    </Col>
    <Col lg={{ span: 6 }}>
      <Title>W1D1</Title>
      <Text>
        An <Mark>app for daily creative challenges</Mark> to get
        inspired, learn new stuff and grow
      </Text>
      <Text>
        W1D1 is a place where we learn to slow down, focus
        attentionand be brave in our artistic endeavours
      </Text>
      <a href="https://apps.apple.com/ru/app/w1d1/id1497155726?l=en&fbclid=IwAR3GVwUd543i3hoCZ4RBR5kaBp2iyhAjrdNuzy_07iTsIZW8jM9ryaOdlew">
        <Button>AppStore →</Button>
      </a>
      <br />
      <br />
      <ProjectRoles roles={['Co-Founder', 'CTO']} />
      <ProjectDisciplines disciplines={['DevOps', 'Engineering']} />
      <ProjectTopics topics={['iOS Application', 'Social Network']} />
      <ProjectYear>2020</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default W1D1;
