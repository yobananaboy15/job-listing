import React from "react";
import RemoveFilterButton from "./RemoveFilterButton";

const Filterbar = ({ filter, removeFilter, clearFilter }) => {
  return (
    <div>
      {[...filter].map((filterItem, index) => {
        return (
          <RemoveFilterButton
            key={index}
            filterItem={filterItem}
            removeFilter={removeFilter}
          />
        );
      })}
      <span onClick={clearFilter}>Clear</span>
    </div>
  );
};

export default Filterbar;
