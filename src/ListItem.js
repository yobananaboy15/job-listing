import React from "react";
import styles from "./ListItem.module.css";
import CompanyContainer from "./CompanyContainer";
import LanguageContainer from "./LanguageContainer";

const ListItem = (props) => {
  //Man skulle kunna kunna göra en categoryBar för abstraktion
  return (
    <div
      className={`${styles["job-container"]} ${
        props.featured && styles["featured-border"]
      }`}
    >
      <img src={props.logo} alt="" />
      <CompanyContainer {...props} />
      <LanguageContainer {...props} />
    </div>
  );
};

export default ListItem;
