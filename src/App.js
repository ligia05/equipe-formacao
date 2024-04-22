import { useState, useEffect } from "react";
import "./App.css";
import GradeEquipe from "./componentes/GradeEquipe";
import Equipe from "./paginas/Equipe";
function App() {
  const [equipe, setEquipe] = useState([]);
  const propLocalSorage = "equipeLocalStorage";

  useEffect(() => {
    const temEquipe = localStorage.getItem(propLocalSorage);
    if (!temEquipe) {
      return;
    }
    const equipeObjeto = JSON.parse(temEquipe);
    setEquipe(equipeObjeto);
  }, []);

  useEffect(() => {
    if (equipe.length === 0) {
      return;
    }
    const equipeString = JSON.stringify(equipe);
    localStorage.setItem(propLocalSorage, equipeString);
  }, [equipe]);

  return (
    <div>
      <header>
        <p className="cabecalho"> Bem-Vindo a formação de equipe</p>
      </header>

      <Equipe equipe={equipe} setEquipe={setEquipe}>
        {" "}
      </Equipe>
      <GradeEquipe grade={equipe} setGradeEquipe={setEquipe}>
        {" "}
      </GradeEquipe>
    </div>
  );
}

export default App;
