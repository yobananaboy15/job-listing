import React from "react";
import styles from "./ListItem.module.scss";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import LanguageContainer from "../LanguageContainer/LanguageContainer";

export const ListItem = (job) => {
  return (
    <li
      className={`${styles["job-container"]} ${
        job.featured && styles["featured-border"]
      }`}
    >
      <img
        className={styles["logo"]}
        src={require("../../" + job.logo.substring(2)).default}
        alt=""
      />
      <CompanyContainer {...job} />
      <LanguageContainer {...job} />
    </li>
  );
};
