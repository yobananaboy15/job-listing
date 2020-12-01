import React from "react";
import styles from "./ListItem.module.css";

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

  return (
    <div className={styles["item-div"]}>
      <img src={logo} alt="" />
      <div>
        <p>{company}</p>
      </div>
      <div className={styles["tool-div"]}>
        {tools.map((tool) => {
          return <span>{tool}</span>;
        })}
      </div>
    </div>
  );
};

export default ListItem;
