import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

const List = ({ jobData, filter, setFilter }) => {
  const filterList = jobData.filter((job) => {
    const categoryArray = [job.role, job.level, ...job.tools, ...job.languages];
    return [...filter].every((categoryItem) =>
      categoryArray.includes(categoryItem)
    );
  });

  return (
    <ul className={styles.list}>
      {filterList.map((job) => {
        return (
          <ListItem
            {...job}
            filter={filter}
            setFilter={setFilter}
            key={job.id}
          />
        );
      })}
    </ul>
  );
};

export default List;
