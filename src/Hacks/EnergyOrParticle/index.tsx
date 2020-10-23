import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import { ResponsiveFrame, Text, Title } from '../../components';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    padding: 20,
  },
});

const EnergyOrParticle: React.FC = (): JSX.Element => (
  <Row className={css(styles.root)}>
    <Container>
      <Row>
        <Col>
          <Title invert>Wave–particle duality</Title>
          <Text invert>
            Light behaves as a wave and as a particle, depending on
            the circumstances and the effect being observed.
            <sup>
              <a href="https://lco.global/spacebook/light-particle/">
                https://lco.global/
              </a>
            </sup>
          </Text>
          <ResponsiveFrame
            src="https://www.youtube.com/embed/3m6k7IDz8Qw"
            title="Energy Or Particle"
          />
        </Col>
      </Row>
    </Container>
  </Row>
);

export default EnergyOrParticle;
