import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

const List = ({ jobData, filter, setFilter }) => {
  //Loopa igenom filter och kolla i motsvarande arrays.

  //Filters the jobData array by checking if the every job object contain everything in the filter set.
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
            <ListItem {...job} filter={filter} setFilter={setFilter} key={job.id}/>
        );
      })}
    </ul>
  );
};

export default List;
