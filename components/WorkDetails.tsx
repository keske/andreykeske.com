import { animated, config, useTransition } from "@react-spring/web";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

type WorkDetailsProps = React.PropsWithChildren;

export const WorkDetails: React.FC<WorkDetailsProps> = ({
  children,
}) => {
  const { selectedWorkId } = useListItems();

  const transitions = useTransition(R.not(R.isNil(selectedWorkId)), {
    config: config.stiff,
    enter: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
  });

  return transitions((styles, item) =>
    item ? (
      <animated.div
        style={{
          opacity: styles.opacity,
        }}
      >
        {children}
      </animated.div>
    ) : null,
  );
};
