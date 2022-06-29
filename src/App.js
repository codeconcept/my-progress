import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [technos, setTechnos] = useState([]);

  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // On first App component mount
  useEffect(() => {
    setTechnos(storedTechnos);
    console.log("App component mounted");
  }, []);

  // On every technos change
  useEffect(() => {
    setStoredTechnos(technos);
    console.log("Technos changed");
  }, [technos]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(technoId) {
    setTechnos(technos.filter((techno) => techno.technoid !== technoId));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />}
        />
        handleDeleteTechno={handleDeleteTechno}
        <Route
          path="/list"
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
