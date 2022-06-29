import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList />
      {new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
    </>
  );
}

export default App;
