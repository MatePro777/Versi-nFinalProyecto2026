function Home({ cambiarPagina }) {
  return (
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
  );
}

export default Home;