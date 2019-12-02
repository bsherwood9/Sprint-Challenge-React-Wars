import React, { useState, useEffect } from "react";
import axios from "axios";

const FilmList = props => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    Promise.all(
      props.films.map(url => axios.get(url).then(item => item.data.title))
    ).then(values => {
      setFilms(values);
    });
  }, [props.films]);

  return (
    <div>
      {films.map(title => (
        <li>{title}</li>
      ))}
    </div>
  );
};

export default FilmList;
