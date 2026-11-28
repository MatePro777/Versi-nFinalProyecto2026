import { useMemo, useState } from "react";
import producto, { categorias } from "../data/productos";
import ProductCard from "../components/ProductCard";
import Navbar02 from "../components/Navbar02";
import Seccion from "../components/Seccion";
import BuscadorProductos from "../components/BuscadorProductos";

function Catalogo({ agregarProducto, favoritos, alternarFavorito }) {
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
                categoriaActual === "todas" ||
                (categoriaActual === "ofertas"
                    ? Boolean(item.oferta)
                    : categoriaActual === "favoritos"
                        ? favoritos.includes(item.id)
                        : item.categoria === categoriaActual);

            return coincideCategoria && textoProducto.includes(termino);
        });
    }, [busqueda, categoriaActual, favoritos]);

    return (
        <section className="catalogo">
            <Seccion
                titulo="Nuestros productos"
                descripcion="Busca lo que necesitas o explora nuestras categorías."
            />

            <div className="catalogo-tools">
                <BuscadorProductos
                    busqueda={busqueda}
                    cambiarBusqueda={setBusqueda}
                />
            </div>

            <Navbar02
                categorias={categorias}
                categoriaActual={categoriaActual}
                cambiarCategoria={setCategoriaActual}
                cantidadFavoritos={favoritos.length}
            />

            {categoriaActual === "ofertas" && (
                <p className="offers-intro">Estos son los productos en oferta del día</p>
            )}
            {categoriaActual === "favoritos" && (
                <p className="favorites-intro">Tus productos guardados para encontrarles rápido.</p>
            )}

            <div className="productos-grid" aria-live="polite">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((prod) => (
                        <ProductCard
                            key={prod.id}
                            producto={prod}
                            agregarProducto={agregarProducto}
                            esFavorito={favoritos.includes(prod.id)}
                            alternarFavorito={alternarFavorito}
                        />
                    ))
                ) : (
                    <p className="no-results">
                        {categoriaActual === "favoritos"
                            ? "Aún no tienes favoritos. Presiona el corazón de un producto para guardarlo aquí."
                            : "No encontramos productos con esos filtros. Intenta con otra búsqueda."}
                    </p>
                )}
            </div>
        </section>
    );
}

export default Catalogo;