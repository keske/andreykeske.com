import React from "react";

import { ListItem } from "@/components/index";
import { useListItems } from "@/stores/index";

const ViewModeList = () => {
  const { items } = useListItems();

  const [preview, setPreview] = React.useState<React.ReactNode>(null);

  const handleMouseOut = React.useCallback(() => {
    setPreview(null);
  }, []);

  const handleMouseOver = React.useCallback((component: React.ReactNode) => {
    setPreview(component);
  }, []);

  return (
    <>
      <div className="t-0 absolute">
        {items.map(({ component: PreviewComponent, title }, index) => (
          <div
            key={index}
            onMouseOut={handleMouseOut}
            onMouseOver={() => {
              handleMouseOver(<PreviewComponent />);
            }}
          >
            <ListItem title={title} />
          </div>
        ))}
      </div>
      <div className="t-0 absolute">{preview}</div>
    </>
  );
};

export default ViewModeList;
