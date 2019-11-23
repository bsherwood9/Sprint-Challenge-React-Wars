import React from "react";
import styled from "styled-components";
import Blah from "../assets/starwars.png";

const Head = styled.div`
  width: 50%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Brand = styled.img`
  padding: 10px;
  width: 400px;
  height: 100px;
`;

const H3 = styled.h3`
  padding: 0 5%;
`;

const Header = () => {
  return (
    <Head>
      <Brand alt="star wars" src={Blah} />
      <div>
        <H3>Characters and Attributes</H3>
      </div>
    </Head>
  );
};

export default Header;
