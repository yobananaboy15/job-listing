import React, { useEffect, useState } from "react";
import List from "./List";
import Filterbar from "./Filterbar";
import Footer from "./Footer";
import styles from "./App.module.css";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setData] = useState([]);
  const [filter, setFilter] = useState(new Set());

  //Runs once on the first render to get the jobdata.
  useEffect(() => {
    loadJobData();
  }, []);

  //Fetches job data in json form and updates the dataState
  const loadJobData = async () => {
    const response = await fetch("data.json");
    const jobData = await response.json();
    setData(jobData);
    setIsLoading(false);
  };

  //Function to add filter. Gets passed down to every list item.
  const addFilter = (tool) => {
    setFilter(new Set([...filter, tool]));
    setShowFilter(true);
  };

  //Function to remove Filter. Gets passed down to every list item.
  const removeFilter = (filterItem) => {
    const newFilterArray = [...filter];
    newFilterArray.splice(newFilterArray.indexOf(filterItem), 1);
    if (newFilterArray.length === 0) setShowFilter(false);
    setFilter(new Set([...newFilterArray]));
  };

  const clearFilter = () => {
    setFilter(new Set());
    setShowFilter(false);
  };

  return (
    <div className={styles["list-container"]}>
      {showFilter && (
        <Filterbar
          filter={filter}
          removeFilter={removeFilter}
          clearFilter={clearFilter}
        />
      )}
      {!isLoading && (
        <List jobData={jobData} filter={filter} addFilter={addFilter} />
      )}
      <Footer />
    </div>
  );
};

export default App;
