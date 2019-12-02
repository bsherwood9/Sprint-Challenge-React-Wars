import React from "react";
import Species from "./Species";
import styled from "styled-components";

import FilmList from "./FilmList";

const Cards = styled.div`
  width: 30%;
  margin: 1% 0;
  height: auto;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 6px -6px black;
`;
const CharCard = ({ data }) => {
  return (
    <Cards>
      <h1>{data.name}</h1>
      <p>Eye Color: {data.eye_color}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <Species info={data.species} />
      <FilmList films={data.films} />
    </Cards>
  );
};
export default CharCard;
