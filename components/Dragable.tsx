import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import React from "react";

type DragableProps = React.PropsWithChildren;

export const Dragable: React.FC<DragableProps> = ({ children }) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useGesture(
    {
      onDrag: ({ offset: [ox, oy] }) => {
        api.start({
          immediate: true,
          x: ox,
          y: oy,
        });
      },
    },
    { drag: { preventDefault: true } },
  );

  return (
    <animated.div
      {...bind()}
      className="absolute cursor-grab"
      style={{
        x,
        y,
      }}
    >
      {children}
    </animated.div>
  );
};
