import { useState } from "react";
import Input from "../componentes/Input";
import Select from "../componentes/Select";
import Formulario from "../componentes/Formulario";

function Equipe(props) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [area, setArea] = useState("");
  const paraOSelect = [
    { valor: "fron_end", tela: "Front End", id: 1 },
    { valor: "desenvolvimento", tela: "Desenvolvimento", id: 2 },
    { valor: "back_end", tela: "Back End", id: 3 },
    { valor: "design", tela: "Design", id: 4 },
  ];
  function submitFormulario(evento) {
    evento.preventDefault();

    const verificacaoDeEmail = props.equipe.findIndex(
      (item) => item.email === email
    );
    if (verificacaoDeEmail >= 0) {
      alert("esse email já está cadastrado");
      return;
    }
    props.setEquipe((inicial) => {
      const valores = { nomeCompleto, email, imagem, area };

      console.log(valores);

      return [...inicial, valores];
    });
  }
  return (
    <div className="formulario">
      <Formulario functionSubmit={submitFormulario}>
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

        <Select
          id="area"
          label="Areas De Atuação"
          state={area}
          setState={setArea}
          renderizar={paraOSelect}
        ></Select>

        <button type="submit">Enviar</button>
        <br />
        <br />
      </Formulario>
    </div>
  );
}

export default Equipe;
