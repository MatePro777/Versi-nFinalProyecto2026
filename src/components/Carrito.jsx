function Carrito({
    carrito,
    aumentar,
    disminuir,
    eliminar,
    total,
    cerrar,
    finalizarCompra,
    mensajeCompra,
}) {
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
                <p className="purchase-success" role="status">{mensajeCompra}</p>
            )}

            {carrito.length === 0 ? (
                <p className="cart-empty">Tu carrito está vacío.</p>
            ) : (
                carrito.map((item) => (
                    <div className="producto-carrito" key={item.id}>
                        <div className="cart-item-details">
                            <strong>{item.nombre}</strong>
                            <p>${item.precio.toFixed(2)} c/u</p>
                            <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
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
                    onClick={finalizarCompra}
                    disabled={carrito.length === 0}
                >
                    Finalizar compra
                </button>
            </div>
        </section>
    );
}

export default Carrito;