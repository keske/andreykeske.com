import * as React from 'react';

// Libs
import styled from 'styled-components';

type Props = {
  topics: string[];
};

const Label = styled.span`
  padding-left: 5px;
`;

const Root = styled.div`
  font-size: 12px;
`;

const ProjectTopics: React.FC<Props> = ({
  topics,
  ...rest
}: Props): JSX.Element => (
  <Root {...rest}>
    <span>
      {`Topic${topics.length === 1 ? '' : 's'}: `}
      {topics.map((topic, index) => (
        <Label key={topic}>
          {`${topic}${index < topics.length - 1 ? ', ' : ''}`}
        </Label>
      ))}
    </span>
  </Root>
);

export default ProjectTopics;
