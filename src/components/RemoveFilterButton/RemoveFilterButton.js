import React from "react";
import styles from "./RemoveFilterButton.module.css";
import crossIcon from "../../images/icon-remove.svg";

export default function RemoveFilterButton({ filterItem, removeFilter }) {
  return (
    <div className={styles["container-div"]}>
      <div className={styles["category-div"]}>{filterItem}</div>
      <div className={styles["button-container"]}>
        <button
          className={styles["remove-button"]}
          onClick={() => removeFilter(filterItem)}
        >
          <img src={crossIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
