import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import TopBar from "./topbar/index";
import Content from "./body/index";
import Player from "../sidebar/player"

const Home_container = styled.section`
  display: flex;
  /* height: 100vh; */
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Home_container>
      <TopBar />
      <Content />
    </Home_container>
  );
}

export default Home;
