import * as React from 'react';

// Libs
import styled, { css } from 'styled-components';

import { mediaQuery } from '../utils';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  padding: 150px 0;
  width: 100vw;

  ${mediaQuery(
    'phone',
    css`
      padding: 20px 0;
    `,
  )}
`;

const Hr = styled.div`
  display: none;

  ${mediaQuery(
    'phone',
    css`
      background-color: #f2f2f2;
      display: block;
      height: 20px;
    `,
  )}
`;

const ProjectWrapper: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => (
  <>
    <Root {...rest}>{children}</Root>
    <Hr />
  </>
);

export default ProjectWrapper;
