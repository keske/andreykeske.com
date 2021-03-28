import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Quote,
  ResponsiveFrame,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const Hydra: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ span: 3 }}>
      <UploadcareImage src="https://ucarecdn.com/f62ca405-42ce-495d-a39a-31d5215bdbc6/" />
    </Col>
    <Col lg={{ span: 9 }}>
      <ResponsiveFrame
        src="https://www.youtube.com/embed/C0yOCYfNZgI"
        title="Hydra"
      />
    </Col>
    <Col lg={{ offset: 3, span: 9 }}>
      <Title>Hydra</Title>
      <Text>
        Hydra&apos;s representation of head regeneration through UI
      </Text>
      <Quote link="https://en.wikipedia.org/wiki/Lernaean_Hydra">
        ...for every head chopped off, the Hydra would regrow two
        heads...
      </Quote>
      <a href="/static/hydra.zip">
        <Button>Download script (zip 2.9 KB)</Button>
      </a>
      <br />
      <br />
      <ProjectTopics topics={['Interface', 'Mythology']} />
      <ProjectYear>2021</ProjectYear>
    </Col>
  </ProjectWrapper>
);

export default Hydra;
