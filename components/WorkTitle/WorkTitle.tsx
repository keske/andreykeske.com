import { animated, config, useTransition } from "@react-spring/web";
import * as R from "ramda";
import React from "react";

import { useListItems } from "@/stores/index";

export const WorkTitle: React.FC = () => {
  const { selectedWorkId, works } = useListItems();

  const transitions = useTransition(R.not(R.isNil(selectedWorkId)), {
    config: config.stiff,
    enter: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
  });

  const title = React.useMemo(
    () =>
      selectedWorkId &&
      works.filter((item) => item.id === selectedWorkId)[0].title,
    [works, selectedWorkId],
  );

  return transitions((styles, item) =>
    item ? (
      <animated.div
        style={{
          opacity: styles.opacity,
        }}
      >
        <div className="fixed top-9 z-10 flex w-full justify-center">
          <h3 className="text-3xl font-black uppercase text-black dark:text-white">
            {title}
          </h3>
        </div>
      </animated.div>
    ) : null,
  );
};
