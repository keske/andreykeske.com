import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';
import { Container, Row } from 'react-bootstrap';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  // I had my graffity crew, which name was `230`
  root: {
    '@media screen and (max-width: 414px)': {
      paddingBottom: 50,
      paddingTop: 50,
    },
    paddingBottom: 115,
    paddingTop: 115,
  },
});

const ProjectWrapper: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
    <div className={css(styles.root)}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </div>
  );

export default ProjectWrapper;
