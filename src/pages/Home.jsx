const integrantes = [
  "Mateo Sebastian Cuevas Cerón",
  "Cesar David Mendoza Zarzoza",
  "Luis Fernando Castillo Olivera",
  "Iker Agustin Sanchez Abasolo",
  "Aldo Yael Anaya Estrada",
  "Eduardo Alexander Morales Cabrera",
];

function Home({ cambiarPagina }) {
  return (
    <>
      <section className="home">
        <div className="home-copy">
          <p className="eyebrow">Tu tiendita de confianza</p>
          <h2>Lo de todos los días, más cerca de ti.</h2>
          <p>
            En EL LIRIO encuentras tus bebidas favoritas y esos antojitos que
            siempre se disfrutan. ¡Gracias por comprar en el barrio!
          </p>
          <button
            className="primary-button"
            onClick={() => cambiarPagina("catalogo")}
            type="button"
          >
            Ver productos
          </button>
        </div>
      </section>
      <section className="team-thanks agradecimiento" aria-labelledby="team-title">
        <p className="team-kicker">Hecho con dedicación</p>
        <h2 id="team-title">Gracias por visitarnos</h2>
        <p className="team-description">Proyecto realizado por:</p>
        <ul className="team-list">
          {integrantes.map((integrante) => (
            <li key={integrante}>{integrante}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;