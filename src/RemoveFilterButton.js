import React from "react";
import styles from "./RemoveFilterButton.module.css";
import crossIcon from "../src/images/icon-remove.svg";

export default function RemoveFilterButton({ filterItem, removeFilter }) {
  return (
    <div className={styles["category-span"]}>
      <div>{filterItem}</div>
      <div className={styles["button-container"]}>
        <button className={styles["remove-icon"]}>
          <img
            src={crossIcon}
            alt=""
            onClick={() => removeFilter(filterItem)}
          />
        </button>
      </div>
    </div>
  );
}
