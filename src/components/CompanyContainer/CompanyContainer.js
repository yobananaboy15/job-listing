import React from "react";
import styles from "./CompanyContainer.module.scss";

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
      <div>
        <span className={styles.company}>{company}</span>
        {renamedNew && <span className={styles["new-tag"]}>NEW!</span>}
        {featured && <span className={styles["featured-tag"]}>FEATURED</span>}
      </div>
      <div className={styles.position}>{position}</div>
      <div className={styles.details}>
        {postedAt} <span>·</span> {contract} <span>·</span>
        {location}
      </div>
    </div>
  );
}
