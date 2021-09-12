import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import styles from "./LanguageContainer.module.scss";

export default function LanguageContainer({ role, level, tools, languages }) {
  return (
    <div className={`${styles["languages-container"]} ${styles["kek"]}`}>
      {[role, level, ...tools, ...languages].map((tool, index) => {
        return <CategoryButton key={index} tool={tool} />;
      })}
    </div>
  );
}
