import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  topics: Array<string>;
};

const styles = StyleSheet.create({
  label: {
    paddingLeft: 5,
  },
  root: {
    opacity: 0.5,
  },
});

const ProjectTopics: React.FC<Props> = ({
  topics,
}: Props): JSX.Element => (
  <div className={css(styles.root)}>
    <span>
      {`Topic${topics.length === 1 ? '' : 's'}: `}
      {topics.map((topic, index) => (
        <span key={topic} className={css(styles.label)}>
          {`${topic}${index < topics.length - 1 ? ', ' : ''}`}
        </span>
      ))}
    </span>
  </div>
);

export default ProjectTopics;
