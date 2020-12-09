import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import styles from "./LanguageContainer.module.css";

//Creates a container for all the languages and tools.

export default function LanguageContainer(props) {
  const { role, level, tools, languages, setFilter, filter } = props;
  return (
    <div className={`${styles["languages-container"]} ${styles["kek"]}`}>
      {[role, level, ...tools, ...languages].map((tool, index) => {
        return (
          <CategoryButton
            key={index}
            tool={tool}
            filter={filter}
            setFilter={setFilter}
          />
        );
      })}
    </div>
  );
}
