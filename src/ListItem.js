import React from "react";
import List from "./List";

const ListItem = (props) => {
  const {
    company,
    logo,
    new: renamedNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    addFilter,
    removeFilter,
  } = props;

  return <div>{tools}</div>;
};

export default ListItem;
