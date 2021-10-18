import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';

import { mediaQuery } from '../utils';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  border: 1px solid red;
  padding: 150px 0;
  width: 100vw;

  ${mediaQuery(
    'phone',
    css`
      padding: 50px 0;
    `,
  )}
`;

const ProjectWrapper: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => (
  <>
    <Root {...rest}>{children}</Root>
  </>
);

export default ProjectWrapper;
