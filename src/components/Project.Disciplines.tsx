import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  disciplines: Array<string>;
};

const styles = StyleSheet.create({
  label: {
    paddingLeft: 5,
  },
  root: {
    opacity: 0.5,
  },
});

const ProjectDisciplines: React.FC<Props> = ({
  disciplines,
}: Props): JSX.Element => (
  <div className={css(styles.root)}>
    <span>
      {`Discipline${disciplines.length === 1 ? '' : 's'}: `}
      {disciplines.map((discipline, index) => (
        <span key={discipline} className={css(styles.label)}>
          {`${discipline}${
            index < disciplines.length - 1 ? ', ' : ''
          }`}
        </span>
      ))}
    </span>
  </div>
);

export default ProjectDisciplines;
