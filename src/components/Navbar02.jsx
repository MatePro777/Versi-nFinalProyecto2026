import { nombreCategoria } from "../data/productos";

function Navbar02({ categorias, categoriaActual, cambiarCategoria }) {
    return (
        <nav className="category-nav" aria-label="Filtrar productos por categoría">
            <button
                className={categoriaActual === "todas" ? "active" : ""}
                type="button"
                aria-pressed={categoriaActual === "todas"}
                onClick={() => cambiarCategoria("todas")}
            >
                Todas
            </button>
            <button
                className={`category-nav__offers ${
                    categoriaActual === "ofertas" ? "active" : ""
                }`}
                type="button"
                aria-pressed={categoriaActual === "ofertas"}
                onClick={() => cambiarCategoria("ofertas")}
            >
                Ofertas
            </button>
            {categorias.map((categoria) => (
                <button
                    className={categoriaActual === categoria ? "active" : ""}
                    key={categoria}
                    type="button"
                    aria-pressed={categoriaActual === categoria}
                    onClick={() => cambiarCategoria(categoria)}
                >
                    {nombreCategoria(categoria)}
                </button>
            ))}
        </nav>
    );
}

export default Navbar02;