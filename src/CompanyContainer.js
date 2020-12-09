import React from "react";
import styles from "./CompanyContainer.module.css";

export default function CompanyContainer(props) {
  const {
    company,
    new: renamedNew,
    featured,
    position,
    postedAt,
    contract,
    location,
  } = props;

  return (
    <div className={styles["company-container"]}>
      <p>
        <span className={styles.company}>{company}</span>
        {renamedNew && <span className={styles["new-tag"]}>NEW!</span>}
        {featured && <span className={styles["featured-tag"]}>FEATURED</span>}
      </p>
      <h3 className={styles.position}>{position}</h3>
      <p>
        {postedAt}
        {contract}
        {location}
      </p>
    </div>
  );
}
