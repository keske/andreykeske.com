import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  roles: string[];
};

const Label = styled.span`
  padding-left: 5px;
`;

const Root = styled.div`
  opacity: 0.5;
`;

const ProjectRoles: React.FC<Props> = ({
  roles,
}: Props): JSX.Element => (
  <Root>
    <span>
      {`Role${roles.length === 1 ? '' : 's'}: `}
      {roles.map((role, index) => (
        <Label key={role}>
          {`${role}${index < roles.length - 1 ? ', ' : ''}`}
        </Label>
      ))}
    </span>
  </Root>
);

export default ProjectRoles;
