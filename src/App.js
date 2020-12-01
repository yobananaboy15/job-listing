import React, { useEffect, useState } from "react";
import List from "./List";
import Filter from "./Filter";
import Footer from "./Footer";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  //Använd useReducer för allting som har med filtrering att göra?
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
  const addFilter = (category) => {
    setFilter([...filter, category]);
  };

  //Function to remove Filter. Gets passed down to every list item.
  const removeFilter = (category) => {
    setFilter([]);
  };

  return (
    <div className="list-container">
      {showFilter && <Filter filter={filter} />}
      <List
        jobData={jobData}
        filter={filter}
        addFilter={addFilter}
        removeFilter={removeFilter}
      />
      <Footer />
    </div>
  );
};

export default App;
