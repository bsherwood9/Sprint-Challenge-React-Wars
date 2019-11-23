import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharCard from "./components/CharCard";
import styled from "styled-components";

const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setList(response.data.results);
      })
      .catch(error => console.log("Error is:", error));
  }, []);
  console.log(list);
  return (
    <div className="App">
      <CardGrid>
        {list.map((item, i) => {
          return <CharCard key={i} data={item} />;
        })}
      </CardGrid>
    </div>
  );
};

export default App;
