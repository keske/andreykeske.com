import React from "react";

type Props = {
  title: string;
};

const ListItem: React.FC<Props> = ({ title }) => (
  <>
    <p className="text-lg font-bold">{title}</p>
  </>
);

export default ListItem;
