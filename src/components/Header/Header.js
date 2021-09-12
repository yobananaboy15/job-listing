import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <header className={styles.header}></header>
    </div>
  );
};
