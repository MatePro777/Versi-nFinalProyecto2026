import { useState } from "react";
import { precioConOferta } from "../data/productos";

function Carrito({
    carrito,
    aumentar,
    disminuir,
    eliminar,
    total,
    cerrar,
    finalizarCompra,
    mensajeCompra,
    enlaceWhatsApp,
    cliente,
    cambiarDatos,
}) {
    const [confirmacionAbierta, setConfirmacionAbierta] = useState(false);

    return (
        <section className="seccion-carrito" aria-labelledby="cart-title">
            <header className="cart-heading">
                <h2 id="cart-title">Mi carrito</h2>
                <button
                    className="cart-close"
                    type="button"
                    onClick={cerrar}
                    aria-label="Salir del carrito"
                >
                    ×
                </button>
            </header>

            {mensajeCompra && (
                <div className="purchase-notice" role="status">
                    <p>{mensajeCompra}</p>
                    {enlaceWhatsApp && (
                        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
                            Abrir WhatsApp
                        </a>
                    )}
                </div>
            )}

            <div className="cart-customer">
                <div>
                    <strong>{cliente.nombre}</strong>
                    <p>{cliente.direccion}</p>
                </div>
                <button type="button" onClick={cambiarDatos}>
                    Cambiar datos
                </button>
            </div>

            {carrito.length === 0 ? (
                <p className="cart-empty">Tu carrito está vacío.</p>
            ) : (
                carrito.map((item) => (
                    <div className="producto-carrito" key={item.id}>
                        <div className="cart-item-details">
                            <strong>{item.nombre}</strong>
                            <p>
                                {item.oferta && (
                                    <span className="cart-original-price">
                                        ${item.precio.toFixed(2)}{" "}
                                    </span>
                                )}
                                ${precioConOferta(item).toFixed(2)} c/u
                            </p>
                            <p>
                                Subtotal: $
                                {(precioConOferta(item) * item.cantidad).toFixed(2)}
                            </p>
                        </div>
                        <div className="controles">
                            <button
                                type="button"
                                onClick={() => disminuir(item.id)}
                                aria-label={`Quitar una unidad de ${item.nombre}`}
                            >
                                −
                            </button>
                            <span aria-label={`Cantidad: ${item.cantidad}`}>{item.cantidad}</span>
                            <button
                                type="button"
                                onClick={() => aumentar(item.id)}
                                aria-label={`Agregar una unidad de ${item.nombre}`}
                            >
                                +
                            </button>
                            <button
                                className="eliminar"
                                type="button"
                                onClick={() => eliminar(item.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))
            )}

            <div className="cart-summary">
                <h3 className="total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </h3>
                <button
                    className="checkout-button"
                    type="button"
                    onClick={() => setConfirmacionAbierta(true)}
                    disabled={carrito.length === 0}
                >
                    Confirmar pedido
                </button>
            </div>

            {confirmacionAbierta && (
                <div className="order-confirmation" role="presentation">
                    <button
                        className="order-confirmation__backdrop"
                        type="button"
                        aria-label="Rechazar y cerrar confirmación"
                        onClick={() => setConfirmacionAbierta(false)}
                    />
                    <section
                        className="order-confirmation__dialog"
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="order-confirmation-title"
                        aria-describedby="order-confirmation-description"
                    >
                        <h3 id="order-confirmation-title">¿Confirmas este pedido?</h3>
                        <p id="order-confirmation-description">
                            El pedido para {cliente.nombre}, con total de ${total.toFixed(2)},
                            se entregaría en: {cliente.direccion}.
                        </p>
                        <ul className="order-confirmation__items">
                            {carrito.map((item) => (
                                <li key={item.id}>
                                    {item.cantidad} × {item.nombre} — $
                                    {(precioConOferta(item) * item.cantidad).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <p className="order-confirmation__warning">
                            Se abrirá WhatsApp con el pedido escrito. Revísalo y pulsa
                            Enviar para compartirlo.
                        </p>
                        <div className="order-confirmation__actions">
                            <button
                                type="button"
                                className="order-confirmation__reject"
                                onClick={() => setConfirmacionAbierta(false)}
                            >
                                Rechazar
                            </button>
                            <button
                                type="button"
                                className="checkout-button"
                                onClick={() => {
                                    finalizarCompra();
                                    setConfirmacionAbierta(false);
                                }}
                            >
                                Aceptar y abrir WhatsApp
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </section>
    );
}

export default Carrito;