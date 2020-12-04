import React from "react";

export default function RemoveFilterButton({ filterItem, removeFilter }) {
  return (
    <>
      <span>
        {filterItem}
        <img
          src="./images/icon-remove.svg"
          alt=""
          onClick={() => removeFilter(filterItem)}
        />
      </span>
    </>
  );
}
