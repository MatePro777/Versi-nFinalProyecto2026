import { useState } from "react";

function AccesoCliente({ cliente, guardarCliente }) {
    const [nombre, setNombre] = useState(cliente?.nombre || "");
    const [direccion, setDireccion] = useState(cliente?.direccion || "");
    const [error, setError] = useState("");

    function manejarEnvio(evento) {
        evento.preventDefault();
        const mensajeError = guardarCliente({
            nombre: nombre.trim(),
            direccion: direccion.trim(),
        });
        setError(mensajeError);
    }

    return (
        <main className="customer-access">
            <form className="customer-access__form" onSubmit={manejarEnvio}>
                <p className="eyebrow">EL LIRIO · Tiendita de tu barrio</p>
                <h1>{cliente ? "Actualiza tus datos" : "Antes de comenzar"}</h1>
                <p className="customer-access__description">
                    Déjanos tu nombre y dirección para incluirlos en tu pedido.
                </p>

                <label htmlFor="customer-name">Nombre</label>
                <input
                    id="customer-name"
                    name="name"
                    autoComplete="name"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    required
                    maxLength={100}
                />

                <label htmlFor="customer-address">Dirección de entrega</label>
                <textarea
                    id="customer-address"
                    name="address"
                    autoComplete="street-address"
                    value={direccion}
                    onChange={(evento) => setDireccion(evento.target.value)}
                    required
                    maxLength={300}
                    rows={3}
                />

                {error && <p className="customer-access__error" role="alert">{error}</p>}

                <button className="primary-button" type="submit">
                    {cliente ? "Guardar cambios" : "Continuar"}
                </button>
                <p className="customer-access__privacy">
                    Tus datos se guardan en este navegador para facilitar tus pedidos.
                </p>
            </form>
        </main>
    );
}

export default AccesoCliente;
