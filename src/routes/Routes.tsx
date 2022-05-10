import React from "react";

import {
  Route,
  BrowserRouter,
  Routes as RoutesContainer,
} from "react-router-dom";
import { Home } from "../pages/Home";

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<Home/>} path="/" />
      </RoutesContainer>
    </BrowserRouter>
  )
};

export default Routes;
