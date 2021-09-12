import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import styles from "./CategoryButton.module.scss";

export default function CategoryButton({ tool }) {
  const { filter, setFilter } = useContext(FilterContext);
  const addFilter = (tool) => {
    setFilter(new Set([...filter, tool]));
  };
  return (
    <button className={styles["filter-tablet"]} onClick={() => addFilter(tool)}>
      <span className={styles["tool"]}>{tool}</span>
    </button>
  );
}
