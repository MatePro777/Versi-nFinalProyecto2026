import { useCallback, useState } from "react";
import { nombreCategoria, precioConOferta } from "../data/productos";
import ProductDetailModal from "./ProductDetailModal";

const iconosCategoria = {
    bebidas: "🥤",
    lacteos: "🥛",
    panaderia: "🥐",
    abarrotes: "🛒",
    botanas: "🍿",
    dulces: "🍬",
    limpieza: "🧼",
    higiene: "🪥",
};

function ProductCard({
    producto,
    agregarProducto,
    esFavorito,
    alternarFavorito,
}) {
    const [imagenNoDisponible, setImagenNoDisponible] = useState(false);
    const [detalleAbierto, setDetalleAbierto] = useState(false);
    const cerrarDetalle = useCallback(() => setDetalleAbierto(false), []);

    return (
        <article className="product-card">
            <div className="product-card__image">
                <button
                    className="product-card__image-trigger"
                    type="button"
                    aria-label={`Ver detalles de ${producto.nombre}`}
                    onClick={() => setDetalleAbierto(true)}
                >
                    {imagenNoDisponible ? (
                        <span
                            className="product-card__image--placeholder"
                            role="img"
                            aria-label={`Imagen pendiente: ${producto.nombre}`}
                        >
                            {iconosCategoria[producto.categoria] || "🛍️"}
                        </span>
                    ) : (
                        <img
                            src={producto.imagen}
                            alt=""
                            loading="lazy"
                            onError={() => setImagenNoDisponible(true)}
                        />
                    )}
                </button>
                <span
                    className={`availability-badge ${
                        producto.disponible ? "" : "availability-badge--unavailable"
                    }`}
                >
                    {producto.disponible ? "Disponible" : "Agotado"}
                </span>
                <button
                    className={`favorite-button ${esFavorito ? "favorite-button--active" : ""}`}
                    type="button"
                    aria-label={
                        esFavorito
                            ? `Quitar ${producto.nombre} de favoritos`
                            : `Agregar ${producto.nombre} a favoritos`
                    }
                    aria-pressed={esFavorito}
                    onClick={() => alternarFavorito(producto.id)}
                >
                    {esFavorito ? "♥" : "♡"}
                </button>
                {producto.oferta && (
                    <span className="offer-badge">-{producto.oferta}%</span>
                )}
            </div>

            <div className="product-card__details">
                <div>
                    <p className="product-card__category">
                        {nombreCategoria(producto.categoria)}
                    </p>
                    <h3>{producto.nombre}</h3>
                    <p className="product-card__description">{producto.descripcion}</p>
                </div>
                <p className="p-precio">
                    {producto.oferta && (
                        <span className="p-precio__original">
                            ${producto.precio.toFixed(2)}
                        </span>
                    )}
                    <span>${precioConOferta(producto).toFixed(2)}</span>
                </p>
            </div>

            <button
                className="product-card__button"
                type="button"
                onClick={() => agregarProducto(producto)}
                disabled={!producto.disponible}
            >
                {producto.disponible ? "Agregar al carrito" : "No disponible"}
            </button>

            {detalleAbierto && (
                <ProductDetailModal
                    producto={producto}
                    icono={iconosCategoria[producto.categoria] || "🛍️"}
                    cerrar={cerrarDetalle}
                    agregarProducto={agregarProducto}
                />
            )}
        </article>
    );
}

export default ProductCard;