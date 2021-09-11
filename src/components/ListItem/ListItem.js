import React from "react";
import styles from "./ListItem.module.scss";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import LanguageContainer from "../LanguageContainer/LanguageContainer";

const ListItem = (props) => {
  return (
    <li
      className={`${styles["job-container"]} ${
        props.featured && styles["featured-border"]
      }`}
    >
      <img
        className={styles["logo"]}
        src={require("../../" + props.logo.substring(2)).default}
        alt=""
      />
      <CompanyContainer {...props} />
      <LanguageContainer {...props} />
    </li>
  );
};

export default ListItem;
