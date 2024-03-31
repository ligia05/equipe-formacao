import { useState, useEffect } from "react";
import "./App.css";
import Input from "./componentes/Input";

function App() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [area, setArea] = useState("");
  const [equipe, setEquipe] = useState([]);
  const propLocalSorage = "equipeLocalStorage";
  function botaoDeletar(email) {
    const equipeFilter = equipe.filter((pessoa) => pessoa.email !== email);
    setEquipe(equipeFilter);
  }

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
  function submitFormulario(evento) {
    evento.preventDefault();
    setEquipe((inicial) => {
      const valores = { nomeCompleto, email, imagem, area };
      return [...inicial, valores];
    });
    console.log(equipe);
  }

  return (
    <div>
      <header>
        <p className="cabecalho"> Bem-Vindo a formação de equipe</p>
      </header>
      <div className="formulario">
        <form action="" onSubmit={submitFormulario}>
          <Input
            nome="Nome"
            typeInput="text"
            labelInput="nome"
            valor={nomeCompleto}
            mudaValor={setNomeCompleto}
          ></Input>
          <Input
            nome="Email"
            typeInput="email"
            valor={email}
            mudaValor={setEmail}
            labelInput="email"
          ></Input>
          <Input
            nome="Imagem"
            typeInput="text"
            valor={imagem}
            mudaValor={setImagem}
          ></Input>

          <br />
          <label htmlFor="area">Area de Atuação</label>
          <select
            value={area}
            onChange={(evento) => setArea(evento.target.value)}
            id="area"
          >
            <option value="front_end">Front End</option>
            <option value="desenvolvimeto">Desenvolvimento</option>
            <option value="back_end">Back End</option>
            <option value="design">Design</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <section>
        {equipe.map((pessoa) => (
          <article className="principal" key={pessoa.email}>
            <img className="imagem" src={pessoa.imagem} alt="" />
            <h2>{pessoa.nomeCompleto} </h2>
            <p>{pessoa.email}</p>
            <p>{pessoa.area}</p>
            <button onClick={() => botaoDeletar(pessoa.email)} type="button">
              Apagar
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
