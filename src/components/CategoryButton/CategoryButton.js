import React from "react";
import styles from "./CategoryButton.module.scss";

export default function CategoryButton({ tool, setFilter, filter }) {
  const addFilter = (tool) => {
    setFilter(new Set([...filter, tool]));
  };
  return (
    <button className={styles["filter-tablet"]} onClick={() => addFilter(tool)}>
      <span className={styles["tool"]}>{tool}</span>
    </button>
  );
}
