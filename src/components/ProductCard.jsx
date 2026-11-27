import { useState } from "react";
import { nombreCategoria, precioConOferta } from "../data/productos";

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

function ProductCard({ producto, agregarProducto }) {
    const [imagenNoDisponible, setImagenNoDisponible] = useState(false);

    return (
        <article className="product-card">
            <div className="product-card__image">
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
                        alt={producto.nombre}
                        loading="lazy"
                        onError={() => setImagenNoDisponible(true)}
                    />
                )}
                <span
                    className={`availability-badge ${
                        producto.disponible ? "" : "availability-badge--unavailable"
                    }`}
                >
                    {producto.disponible ? "Disponible" : "Agotado"}
                </span>
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
        </article>
    );
}

export default ProductCard;