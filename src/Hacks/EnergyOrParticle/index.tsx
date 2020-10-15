import React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Col, Row } from 'react-bootstrap';

// Components
import { Text, Title } from '../../components';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
  },
});

const EnergyOrParticle: React.FC = (): JSX.Element => (
  <Row className={css(styles.root)}>
    <Col>
      <Title>Wave–particle duality</Title>
      <Text>
        Light behaves as a wave and as a particle, depending on the
        circumstances and the effect being observed.
        <sup>
          <a href="https://lco.global/spacebook/light-particle/">
            https://lco.global/
          </a>
        </sup>
      </Text>

      <div className="responsive-container">
        <iframe
          allowFullScreen
          frameBorder="0"
          height="400"
          src="https://www.youtube.com/embed/3m6k7IDz8Qw"
          width="100%"
        />
      </div>
    </Col>
  </Row>
);

export default EnergyOrParticle;
