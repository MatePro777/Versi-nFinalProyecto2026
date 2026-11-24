function Cambio({ cambiarPagina, paginaActual }) {
    return (
        <nav className="page-nav" aria-label="Navegación principal">
            <button
                className={paginaActual === "home" ? "active" : ""}
                onClick={() => cambiarPagina("home")}
                type="button"
            >
                Inicio
            </button>
            <button
                className={paginaActual === "catalogo" ? "active" : ""}
                onClick={() => cambiarPagina("catalogo")}
                type="button"
            >
                Productos
            </button>
        </nav>
    );
}

export default Cambio;