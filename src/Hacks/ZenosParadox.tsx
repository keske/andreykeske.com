import * as React from 'react';

// Libs
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import {
  Button,
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Quote,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const ZenosParadox: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Col lg={{ offset: 0, span: 12 }}>
      <Title>Zeno&apos;s paradoxes, Achilles and the tortoise</Title>
      <Text>Some descriptions by me</Text>
    </Col>
    <Col lg={{ offset: 0, span: 7 }}>
      <Quote link="https://en.wikipedia.org/wiki/Zeno's_paradoxes#Achilles_and_the_tortoise">
        In the paradox of Achilles and the tortoise, Achilles is in a
        footrace with the tortoise. Achilles allows the tortoise a
        head start of 100 meters, for example. Suppose that each racer
        starts running at some constant speed, one faster than the
        other. After some finite time, Achilles will have run 100
        meters, bringing him to the tortoise&apos;s starting point.
        During this time, the tortoise has run a much shorter
        distance, say 2 meters. It will then take Achilles some
        further time to run that distance, by which time the tortoise
        will have advanced farther; and then more time still to reach
        this third point, while the tortoise moves ahead. Thus,
        whenever Achilles arrives somewhere the tortoise has been, he
        still has some distance to go before he can even reach the
        tortoise. As Aristotle noted, this argument is similar to the
        Dichotomy. It lacks, however, the apparent conclusion of
        motionlessness.
      </Quote>
      <Link to="/zenos-paradox">
        <Button>Try it out →</Button>
      </Link>
      <br />
      <br />
      <ProjectTopics topics={['TOPIC']} />
      <ProjectYear>0000</ProjectYear>
    </Col>
    <Col lg={{ offset: 0, span: 4 }}>
      <UploadcareImage src="https://ucarecdn.com/da96a145-05a4-4387-82cc-6d393bb4064a/" />
    </Col>
  </ProjectWrapper>
);

export default ZenosParadox;
