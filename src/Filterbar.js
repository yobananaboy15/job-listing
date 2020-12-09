import React from "react";
import RemoveFilterButton from "./RemoveFilterButton";
import styles from "./Filterbar.module.css";

//Filterbar to
const Filterbar = ({ filter, setFilter }) => {
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
      <span onClick={clearFilter}>Clear</span>
    </div>
  );
};

export default Filterbar;
