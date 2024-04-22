function Formulario(props) {
  return <form onSubmit={props.functionSubmit}>{props.children}</form>;
}

export default Formulario;
