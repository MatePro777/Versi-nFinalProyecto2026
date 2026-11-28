import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccesoCliente from "./components/AccesoCliente";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import { precioConOferta } from "./data/productos";
import { abrirChatWhatsApp, crearEnlaceWhatsApp } from "./utils/whatsapp";

const telefonoWhatsApp = "525567364194";

function App() {
    const [paginaActual, setPaginaActual] = useState("home");
    const [carrito, setCarrito] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [mensajeCompra, setMensajeCompra] = useState("");
    const [enlaceWhatsApp, setEnlaceWhatsApp] = useState("");
    const [cliente, setCliente] = useState(() => {
        const nombre = window.localStorage.getItem("el-lirio-nombre") || "";
        const direccion = window.localStorage.getItem("el-lirio-direccion") || "";
        return nombre && direccion ? { nombre, direccion } : null;
    });
    const [editarCliente, setEditarCliente] = useState(false);

    function guardarCliente(datosCliente) {
        try {
            window.localStorage.setItem("el-lirio-nombre", datosCliente.nombre);
            window.localStorage.setItem("el-lirio-direccion", datosCliente.direccion);
            setCliente(datosCliente);
            setEditarCliente(false);
        } catch (error) {
            console.error("No se pudieron guardar los datos del cliente.", error);
            return "No se pudieron guardar tus datos. Revisa la configuración del navegador e inténtalo de nuevo.";
        }

        return "";
    }

    function agregarProducto(producto) {
        if (!producto.disponible) return;

        setMensajeCompra("");
        setCarrito((actual) => {
            const existente = actual.find((item) => item.id === producto.id);
            if (existente) {
                return actual.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            return [...actual, { ...producto, cantidad: 1 }];
        });
    }

    function alternarFavorito(id) {
        setFavoritos((actuales) =>
            actuales.includes(id)
                ? actuales.filter((favoritoId) => favoritoId !== id)
                : [...actuales, id]
        );
    }

    function finalizarCompra() {
        if (carrito.length === 0 || carrito.some((item) => !item.disponible)) return;

        const detallePedido = carrito
            .map((item) => {
                const precio = precioConOferta(item);
                return `${item.cantidad} x ${item.nombre} - $${precio.toFixed(2)} c/u = $${(precio * item.cantidad).toFixed(2)}`;
            })
            .join("\n");
        const mensaje = [
            "Hola, quiero hacer este pedido:",
            "",
            detallePedido,
            "",
            `Total: $${total.toFixed(2)}`,
            `Nombre: ${cliente.nombre}`,
            `Direccion de entrega: ${cliente.direccion}`,
        ].join("\n");
        const urlWhatsApp = crearEnlaceWhatsApp(telefonoWhatsApp, mensaje);
        setEnlaceWhatsApp(urlWhatsApp);
        if (!abrirChatWhatsApp(urlWhatsApp)) {
            setMensajeCompra(
                "El navegador bloqueó la ventana de WhatsApp. Permite las ventanas emergentes e inténtalo de nuevo."
            );
            return;
        }

        setMensajeCompra("WhatsApp se abrió con tu pedido escrito. Revísalo y pulsa Enviar.");
    }

    function aumentar(id) {
        setCarrito((actual) =>
            actual.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    }

    function disminuir(id) {
        setCarrito((actual) =>
            actual
                .map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
                )
                .filter((item) => item.cantidad > 0)
        );
    }

    function eliminar(id) {
        setCarrito((actual) => actual.filter((item) => item.id !== id));
    }

    const total = carrito.reduce(
        (suma, item) => suma + precioConOferta(item) * item.cantidad,
        0
    );

    if (!cliente || editarCliente) {
        return (
            <AccesoCliente
                cliente={cliente}
                guardarCliente={guardarCliente}
            />
        );
    }

    return (
        <div className="app">
            <Header
                cambiarPagina={setPaginaActual}
                paginaActual={paginaActual}
                carrito={carrito}
                aumentar={aumentar}
                disminuir={disminuir}
                eliminar={eliminar}
                total={total}
                finalizarCompra={finalizarCompra}
                mensajeCompra={mensajeCompra}
                enlaceWhatsApp={enlaceWhatsApp}
                cliente={cliente}
                cambiarDatos={() => setEditarCliente(true)}
            />
            
            <main>
                {paginaActual === "home" && (
                    <Home cambiarPagina={setPaginaActual} />
                )}
                {paginaActual === "catalogo" && (
                    <Catalogo
                        agregarProducto={agregarProducto}
                        favoritos={favoritos}
                        alternarFavorito={alternarFavorito}
                    />
                )}
            </main>
            
            <Footer telefonoWhatsApp={telefonoWhatsApp} />
        </div>
    );
}

export default App;