import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Title,
  UploadcareImage,
} from '../components';

const StyledCol = styled(Col)`
  padding: 20px 0;
`;

const Manhattan: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <StyledCol lg={{ offset: 4, span: 5 }}>
      <UploadcareImage src="https://ucarecdn.com/287536f5-7822-497f-ab92-9363e935791f/" />

      <Title>Inverted Manhattan</Title>
      <ProjectTopics topics={['Ready Made']} />
      <ProjectYear>2011</ProjectYear>
    </StyledCol>
  </ProjectWrapper>
);

export default Manhattan;
