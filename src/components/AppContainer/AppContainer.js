import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import List from "../List/List";
import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
  const { filter } = useContext(FilterContext);
  return (
    <div
      className={
        filter.size > 0 ? styles["inner-container"] : styles["inner-container2"]
      }
    >
      <List />
    </div>
  );
};
