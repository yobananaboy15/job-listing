import React, { useEffect, useState } from "react";
import List from "../List/List";
import Filterbar from "../Filterbar/Filterbar";
import styles from "./App.module.css";

const App = () => {
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
    setIsLoading(false); //behövs den här ens?
  };

  return (
    <>
      <div className={styles["header-container"]}>
        <header className={styles.header}></header>
      </div>
      <div className={styles["inner-container"]}>
        {filter.size > 0 && <Filterbar filter={filter} setFilter={setFilter} />}
        {!isLoading && (
          <List jobData={jobData} filter={filter} setFilter={setFilter} />
        )}
      </div>
    </>
  );
};

export default App;
