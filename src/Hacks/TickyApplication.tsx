import * as React from 'react';

// Libs
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import {
  ProjectTopics,
  ProjectWrapper,
  ProjectYear,
  Spacer,
  Text,
  Title,
  UploadcareImage,
} from '../components';

const COLOR = '#FFF';

// const StyledMark = styled(Mark)`
//   border: 1px solid ${COLOR};
// `;

const StyledProjectYear = styled(ProjectYear)`
  border: 1px solid ${COLOR};
  color: ${COLOR};
`;

const StyledText = styled(Text)`
  color: ${COLOR};
`;

const StyledTitle = styled(Title)`
  color: ${COLOR};
`;

const StyledProjectTopics = styled(ProjectTopics)`
  color: ${COLOR};
`;

const StyledProjectWrapper = styled(ProjectWrapper)`
  background-color: #000;
  padding-top: 200px;
`;

const TickyApplication: React.FC = (): JSX.Element => (
  <StyledProjectWrapper>
    <Container>
      <Row>
        <Col lg={{ offset: 2, span: 4 }}>
          <UploadcareImage
            format="png"
            src="https://ucarecdn.com/d2236b35-bc6a-4e03-a56d-adf3a5d5402e/"
          />
        </Col>

        <Col lg={{ offset: 1, span: 4 }}>
          <Spacer size={10} />

          <StyledTitle>Ticky App</StyledTitle>

          <StyledText>
            Ticky is an application that shows the current time (or
            selected timezone&rsquo;s time) through the notification
            badge.
          </StyledText>

          <StyledText>Soon on the AppStore</StyledText>

          <StyledProjectTopics
            topics={['Application', 'Interface']}
          />
          <StyledProjectYear>2021</StyledProjectYear>
        </Col>
      </Row>
    </Container>
  </StyledProjectWrapper>
);

export default TickyApplication;
