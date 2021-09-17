import * as React from 'react';

// Libs
import styled from 'styled-components';

// Components
import UploadcareImage from './UploadcareImage';

const Root = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 73px;
`;

const Me: React.FC = (): JSX.Element => (
  <Root>
    <UploadcareImage src="https://ucarecdn.com/18251169-c22c-46f4-9add-a1b3670cf257/" />
  </Root>
);

export default Me;
