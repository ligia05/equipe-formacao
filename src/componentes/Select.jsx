function Select(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        value={props.state}
        onChange={(evento) => props.setState(evento.target.value)}
        id={props.id}
        required
      >
        <option value="" disabled>
          Escolha uma opção
        </option>
        {props.renderizar.map((selecao) => (
          <option value={selecao.valor} key={selecao.id}>
            {selecao.tela}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
