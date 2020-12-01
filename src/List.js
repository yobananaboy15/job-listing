import React from "react";
import ListItem from "./ListItem";

const List = ({ jobData, filteredJobData, addFilter, removeFilter }) => {
  //Den tar emot en array med det som ska filtereras, och en array med data.
  //Om filteredJobs.length > 0, kör filterJobs. Eller useEffect när filtererdjobs ändras?
  //Räcker det med att man skickar en referens till

  const filterList = (jobData) => {
    jobData.filter((job) => {
      if (job.id !== "kek") return true;
    });
  };

  return (
    <ul>
      {jobData.map((job) => {
        return (
          <li key={job.id}>
            <ListItem
              {...job}
              addFilter={addFilter}
              removeFilter={removeFilter}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
