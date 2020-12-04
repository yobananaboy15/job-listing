import React from "react";
import ListItem from "./ListItem";

const List = ({ jobData, filter, addFilter }) => {
  //Loopa igenom filter och kolla i motsvarande arrays.

  //Filters the jobData array by checking if the job objects contain everything in the filter set.
  const filterList = jobData.filter((job) => {
    const categoryArray = [job.role, job.level, ...job.tools, ...job.languages];
    return [...filter].every((categoryItem) =>
      categoryArray.includes(categoryItem)
    );
  });

  return (
    <ul>
      {filterList.map((job) => {
        return (
          <li key={job.id}>
            <ListItem {...job} addFilter={addFilter} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
