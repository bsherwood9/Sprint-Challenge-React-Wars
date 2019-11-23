// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FilmList = props => {
//   const [films, setFilms] = useState([]);

//   useEffect(() => {
//     const filmArray = props.films;
//     const blandArray = [];
//     filmArray.forEach(element => {
//       axios.get(`${element}`).then(item => {
//         blandArray.push(item.data.title);
//         console.log(blandArray);
//         setFilms(blandArray);
//       });
//     });
//   }, [films]);

//   return <div>{films}</div>;
// };

// export default FilmList;

/* {films.map(ele => {
        return <p>{ele}</p>;
    //   })} */
