import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.div`
  padding: 150px 0;
  width: 100%;
`;

const ProjectWrapper: React.FC<Props> = ({
  children,
  ...rest
}: Props): JSX.Element => <Root {...rest}>{children}</Root>;

export default ProjectWrapper;
