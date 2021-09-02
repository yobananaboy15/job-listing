import React, { useEffect, useState } from "react";
import List from "../List/List";
import Filterbar from "../Filterbar/Filterbar";
import styles from "./App.module.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setData] = useState([]);
  const [filter, setFilter] = useState(new Set());

  useEffect(() => {
    loadJobData();
  }, []);

  const loadJobData = async () => {
    const response = await fetch("data.json");
    const jobData = await response.json();
    setData(jobData);
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles["header-container"]}>
        <header className={styles.header}></header>
      </div>
      {filter.size > 0 && <Filterbar filter={filter} setFilter={setFilter} />}
      <div
        className={
          filter.size > 0
            ? styles["inner-container"]
            : styles["inner-container2"]
        }
      >
        {!isLoading && (
          <List jobData={jobData} filter={filter} setFilter={setFilter} />
        )}
      </div>
    </>
  );
};

export default App;
