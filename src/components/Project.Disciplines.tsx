import * as React from "react";

// Libs
import styled from "styled-components";

type Props = {
  disciplines: string[];
};

const Label = styled.span`
  padding-left: 5px;
`;

const Root = styled.div`
  font-size: 12px;
`;

const ProjectDisciplines: React.FC<Props> = ({
  disciplines,
  ...rest
}: Props): JSX.Element => (
  <Root {...rest}>
    <span>
      {`Discipline${disciplines.length === 1 ? "" : "s"}: `}
      {disciplines.map((discipline, index) => (
        <Label key={discipline}>
          {`${discipline}${index < disciplines.length - 1 ? ", " : ""}`}
        </Label>
      ))}
    </span>
  </Root>
);

export default ProjectDisciplines;
