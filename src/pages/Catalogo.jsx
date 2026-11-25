import { useMemo, useState } from "react";
import producto, { categorias } from "../data/productos";
import ProductCard from "../components/ProductCard";
import Navbar02 from "../components/Navbar02";
import Seccion from "../components/Seccion";

function Catalogo({ agregarProducto }) {
    const [busqueda, setBusqueda] = useState("");
    const [categoriaActual, setCategoriaActual] = useState("todas");
    const productosFiltrados = useMemo(() => {
        const termino = busqueda
            .trim()
            .toLocaleLowerCase("es")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return producto.filter((item) => {
            const textoProducto = `${item.nombre} ${item.descripcion}`
                .toLocaleLowerCase("es")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            const coincideCategoria =
                categoriaActual === "todas" || item.categoria === categoriaActual;

            return coincideCategoria && textoProducto.includes(termino);
        });
    }, [busqueda, categoriaActual]);

    return (
        <section className="catalogo">
            <Seccion
                titulo="Nuestros productos"
                descripcion="Busca lo que necesitas o explora nuestras categorías."
            />

            <div className="catalogo-tools">
                <label className="search-field">
                    <span aria-hidden="true">⌕</span>
                    <input
                        type="search"
                        value={busqueda}
                        onChange={(evento) => setBusqueda(evento.target.value)}
                        placeholder="Buscar productos..."
                        aria-label="Buscar productos"
                    />
                </label>
            </div>

            <Navbar02
                categorias={categorias}
                categoriaActual={categoriaActual}
                cambiarCategoria={setCategoriaActual}
            />

            <div className="productos-grid" aria-live="polite">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((prod) => (
                        <ProductCard
                            key={prod.id}
                            producto={prod}
                            agregarProducto={agregarProducto}
                        />
                    ))
                ) : (
                    <p className="no-results">
                        No encontramos productos con esos filtros. Intenta con otra búsqueda.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Catalogo;