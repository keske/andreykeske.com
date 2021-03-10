import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  roles: Array<string>;
};

const styles = StyleSheet.create({
  label: {
    paddingLeft: 5,
  },
  root: {
    opacity: 0.5,
  },
});

const ProjectRoles: React.FC<Props> = ({
  roles,
}: Props): JSX.Element => (
  <div className={css(styles.root)}>
    <span>
      {`Role${roles.length === 1 ? '' : 's'}: `}
      {roles.map((role, index) => (
        <span key={role} className={css(styles.label)}>
          {`${role}${index < roles.length - 1 ? ', ' : ''}`}
        </span>
      ))}
    </span>
  </div>
);

export default ProjectRoles;
