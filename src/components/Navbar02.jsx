import { nombreCategoria } from "../data/productos";

function Navbar02({
    categorias,
    categoriaActual,
    cambiarCategoria,
    cantidadFavoritos,
}) {
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
            {(cantidadFavoritos > 0 || categoriaActual === "favoritos") && (
                <button
                    className={`category-nav__favorites ${
                        categoriaActual === "favoritos" ? "active" : ""
                    }`}
                    type="button"
                    aria-pressed={categoriaActual === "favoritos"}
                    onClick={() => cambiarCategoria("favoritos")}
                >
                    <span aria-hidden="true">♥</span> Favoritos ({cantidadFavoritos})
                </button>
            )}
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