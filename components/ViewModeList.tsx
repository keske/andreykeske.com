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
      <div className="absolute top-0">{preview}</div>
      <div className="absolute top-0 p-5">
        {items.map(({ component: PreviewComponent, title }, index) => (
          <div
            key={index}
            // onMouseOut={handleMouseOut}
            onMouseOver={() => {
              handleMouseOver(<PreviewComponent />);
            }}
          >
            <ListItem title={title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewModeList;
