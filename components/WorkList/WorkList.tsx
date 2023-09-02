import { animated, config, useTransition } from "@react-spring/web";
import * as R from "ramda";
import React from "react";

import { Stack } from "@/components";
import { useListItems } from "@/stores";

type WorkListProps = {
  handleMouseOut: () => void;
  handleMouseOver: (component: React.ReactElement<any, any>) => void;
  handleShowWork: (id: string) => void;
};

export const WorkList: React.FC<WorkListProps> = ({
  handleMouseOut,
  handleMouseOver,
  handleShowWork,
}) => {
  const { selectedWorkId, works } = useListItems();

  const transitions = useTransition(R.isNil(selectedWorkId), {
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
        <Stack className="fixed bottom-10 ml-10">
          {works.map(({ component: Component, id, title }) => (
            <span
              className="cursor-pointer list-none text-5xl font-black uppercase tracking-wider text-black hover:text-[#ccff00] dark:text-white"
              key={id}
              onClick={() => {
                handleShowWork(id);
              }}
              onMouseOut={handleMouseOut}
              onMouseOver={() => {
                handleMouseOver(<Component />);
              }}
            >
              {title}
            </span>
          ))}
        </Stack>
      </animated.div>
    ) : null,
  );
};
