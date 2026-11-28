import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { nombreCategoria, precioConOferta } from "../data/productos";

function ProductDetailModal({ producto, icono, cerrar, agregarProducto }) {
    const [imagenNoDisponible, setImagenNoDisponible] = useState(false);
    const botonCerrar = useRef(null);
    const precioActual = precioConOferta(producto);

    useEffect(() => {
        botonCerrar.current?.focus();

        function cerrarConEscape(evento) {
            if (evento.key === "Escape") cerrar();
        }

        window.addEventListener("keydown", cerrarConEscape);
        return () => window.removeEventListener("keydown", cerrarConEscape);
    }, [cerrar]);

    return createPortal(
        <div className="product-detail-overlay">
            <button
                className="product-detail-backdrop"
                type="button"
                aria-label={`Cerrar detalles de ${producto.nombre}`}
                onClick={cerrar}
            />
            <section
                className="product-detail-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-detail-title"
                aria-describedby="product-detail-description"
            >
                <div className="product-detail-image">
                    {imagenNoDisponible ? (
                        <span className="product-detail-placeholder" aria-hidden="true">
                            {icono}
                        </span>
                    ) : (
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            onError={() => setImagenNoDisponible(true)}
                        />
                    )}
                    {producto.oferta && (
                        <span className="offer-badge">-{producto.oferta}%</span>
                    )}
                </div>

                <div className="product-detail-content">
                    <button
                        ref={botonCerrar}
                        className="product-detail-close"
                        type="button"
                        aria-label="Cerrar ventana de detalles"
                        onClick={cerrar}
                    >
                        ×
                    </button>
                    <p className="product-card__category">
                        {nombreCategoria(producto.categoria)}
                    </p>
                    <p className="product-detail-kicker">Detalles del producto</p>
                    <h2 id="product-detail-title">{producto.nombre}</h2>
                    <p id="product-detail-description" className="product-detail-description">
                        {producto.descripcion}
                    </p>

                    <dl className="product-detail-facts">
                        <div>
                            <dt>Disponibilidad</dt>
                            <dd className={producto.disponible ? "is-available" : "is-unavailable"}>
                                {producto.disponible ? "Disponible" : "Agotado"}
                            </dd>
                        </div>
                        <div>
                            <dt>Precio</dt>
                            <dd>
                                {producto.oferta && (
                                    <span className="product-detail-original-price">
                                        ${producto.precio.toFixed(2)}
                                    </span>
                                )}
                                ${precioActual.toFixed(2)}
                            </dd>
                        </div>
                    </dl>

                    <button
                        className="primary-button product-detail-add"
                        type="button"
                        disabled={!producto.disponible}
                        onClick={() => {
                            agregarProducto(producto);
                            cerrar();
                        }}
                    >
                        {producto.disponible ? "Agregar al carrito" : "Producto agotado"}
                    </button>
                </div>
            </section>
        </div>,
        document.body
    );
}

export default ProductDetailModal;
