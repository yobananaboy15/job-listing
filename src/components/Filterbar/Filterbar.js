import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { RemoveFilterButton } from "../RemoveFilterButton/RemoveFilterButton";
import styles from "./Filterbar.module.scss";

export const Filterbar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const removeFilter = (filterItem) => {
    const newFilterArray = [...filter];
    newFilterArray.splice(newFilterArray.indexOf(filterItem), 1);
    setFilter(new Set([...newFilterArray]));
  };

  const clearFilter = () => {
    setFilter(new Set());
  };

  return (
    <div className={styles.filterbar}>
      <div className={styles.testing}>
        {[...filter].map((filterItem, index) => {
          return (
            <RemoveFilterButton
              key={index}
              filterItem={filterItem}
              removeFilter={removeFilter}
              setFilter={setFilter}
            />
          );
        })}
      </div>
      <span class={styles["clear-span"]} onClick={clearFilter}>
        Clear
      </span>
    </div>
  );
};
