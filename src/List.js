import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = () => {
  //State för data
  //Skapa try catch för datan.
  //Url för att hämta datan? Var.
  //Ett state för filtrerad data? listan bör mappa igenom en annan lista. en useeffekt för datan när den ändras.

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    //Lägg in try-catch-statement
    const response = await fetch("data.json");
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <ul>
          {data.map((job) => {
            return (
              <li>
                <ListItem {...job} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
