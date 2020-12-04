import React, { useEffect, useState } from "react";
import List from "./List";
import Filterbar from "./Filterbar";
import Footer from "./Footer";

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
  const removeFilter = (category) => {
    setFilter([]);
  };

  return (
    <div className="list-container">
      {showFilter && <Filterbar filter={filter} removeFilter={removeFilter} />}
      {!isLoading && (
        <List jobData={jobData} filter={filter} addFilter={addFilter} />
      )}
      <Footer />
    </div>
  );
};

export default App;
