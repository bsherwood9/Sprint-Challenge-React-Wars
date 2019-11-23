import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharCard from "./components/CharCard";
import styled from "styled-components";
import Header from "../src/components/Header";

const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% 0;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [list, setList] = useState([]);
  const [page, setPage] = useState("https://swapi.co/api/people/");
  const Button = styled.button`
    width: 100px;
    font-size: 20px;
    padding: 1%;
    margin: 2% auto;
    background: darkred;
    border-radius: 50%;
    border: black;
    color: white;
  `;

  useEffect(() => {
    axios
      .get(`${page}`)
      .then(response => {
        setList(response.data.results);
        setPage(response.data);
      })
      .catch(error => console.log("Error is:", error));
  }, [page]);
  console.log(list);
  console.log(page);

  const NextPage = () => {
    setPage(page.next);
  };

  return (
    <div className="App">
      <Header pages={page} setpages={setPage} />
      <CardGrid>
        {list.map((item, i) => {
          return <CharCard key={i} data={item} />;
        })}
      </CardGrid>
      <Button onClick={NextPage}>Next</Button>
    </div>
  );
};

export default App;
