import React from "react";
import Species from "./Species";
import styled from "styled-components";
// import FilmList from "./FilmList";

const Cards = styled.div`
  width: 30%;
  margin: 3% 0;
  height: auto;
  background: rgba(255, 255, 255, 0.8);
`;
const CharCard = ({ data }) => {
  return (
    <Cards>
      <h1>{data.name}</h1>
      <p>{data.gender}</p>
      <Species info={data.species} />
      {/* <FilmList films={data.films} /> */}
    </Cards>
  );
};
export default CharCard;
