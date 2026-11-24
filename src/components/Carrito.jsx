function Carrito ({
    carrito,
    aumentar,
    disminuir,
    eliminar,
    total
}) {

    return (
        <section className="seccion-carrito">
            <h2>🛒 Mi carrito de compras</h2>
            {carrito.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                carrito.map(item => (
                    <div className="producto-carrito" key={item.id}>
                        <div>
                            <strong>{item.nombre}</strong>
                            <p>
                                Precio: ${item.precio.toFixed(2)}
                            </p>

                            <p>
                                Cantidad: {item.cantidad}
                            </p>
                        </div>

                        <div className="controles">

                            <button onClick={() => aumentar(item.id)}>
                                +
                            </button>

                            <button onClick={() => disminuir(item.id)}>
                                -
                            </button>

                            <button className="eliminar" onClick={() => eliminar(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))
            )}

            <h3 className="total">
                Total: ${total.toFixed(2)}
            </h3>
        </section>
    );
}

export default Carrito;