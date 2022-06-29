import React from "react";
import { Routes, Route } from "react-router-dom";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd />} />
        <Route path="/list" element={<TechnoList />} />
      </Routes>
    </>
  );
}

export default App;
