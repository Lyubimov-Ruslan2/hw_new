import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./Header/Header.component";
import Error404 from "./Eror404/Eror404";
import "../index";
const App = (props) => {
  return (
    <Routes>
      <Route path="/search" element={<Main />} />
      <Route path="/" element={<Navigate replace to="/search" />} />
      <Route path="/error" element={<Error404 />} />
    </Routes>
  );
};

export default App;
