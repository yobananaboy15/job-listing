import React, { useState } from "react";
import List from "./List";
import Filter from "./Filter";
import Footer from "./Footer";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  //State för vad som ska filtreras fram, kanske en array? [React, etc]. Både filter och list (för att drilla)behöver tillgång. och LISTITEM som måste ha en funktion för att förändra
  //State för att kolla filter ska visas. skickas till filter

  return (
    <div className="list-container">
      {showFilter && <Filter />}
      <List />
      <Footer />
    </div>
  );
};

export default App;
