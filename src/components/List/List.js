import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ListItem } from "../ListItem/ListItem";
import styles from "./List.module.scss";

const List = () => {
  const { filter } = useContext(FilterContext);

  const [jobData, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    if (jobData.length) {
      const filterList = () => {
        return jobData.filter((job) => {
          const filterable = new Set([
            job.role,
            job.level,
            ...job.tools,
            ...job.languages,
          ]);

          return [...filter].every((categoryItem) =>
            filterable.has(categoryItem)
          );
        });
      };
      setFilteredJobs(filterList());
    }
  }, [jobData, filter]);

  return (
    <>
      {filteredJobs.length && (
        <ul className={styles.list}>
          {filteredJobs.map((job) => {
            return <ListItem {...job} key={job.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default List;
