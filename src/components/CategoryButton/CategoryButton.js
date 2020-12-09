import React from "react";
import styles from "./CategoryButton.module.css";

export default function CategoryButton({ tool, setFilter, filter }) {
  const addFilter = (tool) => {
    setFilter(new Set([...filter, tool]));
  };
  return (
    <button className={styles["filter-tablet"]} onClick={() => addFilter(tool)}>
      <span>{tool}</span>
    </button>
  );
}
