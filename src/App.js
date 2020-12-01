import React, { useEffect, useState } from "react";
import List from "./List";
import Filter from "./Filter";
import Footer from "./Footer";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

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

  //Function to add Filter to
  const addFilter = (category) => {
    setFilteredJobs([...filteredJobs, category]);
  };

  const removeFilter = (category) => {
    setFilteredJobs([]);
  };

  return (
    <div className="list-container">
      {showFilter && <Filter filterJobs={filterData} />}
      <List
        jobData={jobData}
        filteredJobData={filteredJobs}
        addFilter={addFilter}
        removeFilter={removeFilter}
      />
      <Footer />
    </div>
  );
};

export default App;
