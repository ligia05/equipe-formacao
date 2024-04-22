function GradeEquipe(props) {
  function botaoDeletar(email) {
    const equipeFilter = props.grade.filter((pessoa) => pessoa.email !== email);
    props.setGradeEquipe(equipeFilter);
  }
  return (
    <div>
      <section>
        {props.grade.map((pessoa) => (
          <article className="principal" key={pessoa.email}>
            <img className="imagem" src={pessoa.imagem} alt="" />
            <h2>{pessoa.nomeCompleto} </h2>

            <p className="nomeEmail">{pessoa.email}</p>
            <p>{pessoa.area}</p>
            <button
              className="botaoDeletar"
              onClick={() => botaoDeletar(pessoa.email)}
              type="button"
            >
              Apagar
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
export default GradeEquipe;
