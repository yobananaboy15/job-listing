import React, { useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Header } from "../Header/Header";
import { AppContainer } from "../AppContainer/AppContainer";
import { Filterbar } from "../Filterbar/Filterbar";

const App = () => {
  const [filter, setFilter] = useState(new Set());
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <Header />
      {filter.size > 0 ? null : <Filterbar />}
      <AppContainer />
    </FilterContext.Provider>
  );
};

export default App;
