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
} from '../components';

import Root from './WarpedTypography/Root';

const StyledText = styled(Text)`
  text-align: center;
`;

const WarpedTypography: React.FC = (): JSX.Element => (
  <ProjectWrapper>
    <Root />
    WarpedTypography
  </ProjectWrapper>
);

export default WarpedTypography;
