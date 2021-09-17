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

const Emoticons: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <StyledCol lg={{ offset: 2, span: 7 }}>
      <UploadcareImage src="https://ucarecdn.com/35883e0f-3251-4069-b7f3-917f9b6a0775/" />

      <Title>Emojii in eastern emoticons</Title>
      <ProjectTopics topics={['Emoji']} />
      <ProjectYear>2015</ProjectYear>
    </StyledCol>
  </ProjectWrapper>
);

export default Emoticons;
