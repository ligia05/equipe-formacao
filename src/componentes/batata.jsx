function Input(props) {
  return (
    <div>
      <label htmlFor={props.labelInput}>{props.nome}</label>
      <input
        type={props.typeInput}
        value={props.valor}
        onChange={(evento) => props.mudaValor(evento.target.value)}
        id={props.labelInput}
      />
      <br />
    </div>
  );
}
export default Input;
