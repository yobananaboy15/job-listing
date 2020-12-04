import React from "react";
import styles from "./ListItem.module.css";
import CategoryButton from "./CategoryButton";

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
  } = props;

  return (
    <div className={styles["job-container"]}>
      <img src={logo} alt="" />
      <div>
        <p>{company}</p>
      </div>
      <div className={styles["languages-container"]}>
        {[role, level, ...tools, ...languages].map((tool, index) => {
          return (
            <CategoryButton key={index} tool={tool} addFilter={addFilter} />
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
