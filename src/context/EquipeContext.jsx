import { createContext, useState, useContext } from "react";

export const EquipeContext = createContext();

function EquipeProvider(props) {
  const [arrayEquipe, setArrayEquipe] = useState([]);
  return (
    <EquipeContext.Provider value={{ arrayEquipe, setArrayEquipe }}>
      {props.children}
    </EquipeContext.Provider>
  );
}
export { EquipeProvider };

function useEquipe() {
  const alface = useContext(EquipeContext);
  return alface;
}

export default useEquipe;
