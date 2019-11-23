import React, { useState, useEffect } from "react";
import axios from "axios";

const Species = props => {
  const [specs, setSpecs] = useState("");

  useEffect(() => {
    axios.get(`${props.info}`).then(item => {
      setSpecs(item.data.name);
    });
  }, [specs]);

  return (
    <>
      <p>Species: {specs}</p>
    </>
  );
};

export default Species;
