import React from "react";
import styles from "./ListItem.module.css";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import LanguageContainer from "../LanguageContainer/LanguageContainer";

const ListItem = (props) => {
  //Man skulle kunna kunna göra en categoryBar för abstraktion
  return (
    <div
      className={`${styles["job-container"]} ${
        props.featured && styles["featured-border"]
      }`}
    >
      <img src={require("../../" + props.logo.substring(2)).default} alt="" />
      <CompanyContainer {...props} />
      <LanguageContainer {...props} />
    </div>
  );
};

export default ListItem;
