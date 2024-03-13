import { useState } from "react";
import "./App.css";

function App() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [area, setArea] = useState("");
  return (
    <div>
      <header>
        <p className="cabecalho"> Bem-Vindo a formação de equipe</p>
      </header>
      <div className="formulario">
        <form action="">
          <label htmlFor="nomeCompleto">Nome Completo</label>
          <input
            type="text"
            value={nomeCompleto}
            onChange={(evento) => setNomeCompleto(evento.target.value)}
            id="nomeCompleto"
          />
          <br />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            id="email"
          />
          <br />
          <label htmlFor="imagem">Imagem</label>
          <input
            type="text"
            value={imagem}
            onChange={(evento) => setImagem(evento.target.value)}
            id="imagem"
          />
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
    </div>
  );
}

export default App;
