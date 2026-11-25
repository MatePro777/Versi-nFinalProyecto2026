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
      <section className="team-thanks" aria-labelledby="team-thanks-title">
        <h2 id="team-thanks-title">Gracias por visitarnos</h2>
        <p>
          Proyecto realizado por Mateo Sebastian Cuevas Cerón, Cesar David
          Mendoza Zarzoza, Luis Fernando Castillo olivera, Iker Agustin Sanchez
          Abasolo, Aldo Yael Anaya Estrada y Eduardo Alexander Morales Cabrera.
        </p>
      </section>
    </>
  );
}

export default Home;