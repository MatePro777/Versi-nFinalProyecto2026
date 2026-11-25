import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";

function App() {
    const [paginaActual, setPaginaActual] = useState("home");
    const [carrito, setCarrito] = useState([]);
    const [mensajeCompra, setMensajeCompra] = useState("");

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

    function finalizarCompra() {
        if (carrito.length === 0 || carrito.some((item) => !item.disponible)) return;

        setCarrito([]);
        setMensajeCompra("¡Compra realizada! Gracias por apoyar a EL LIRIO.");
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
        (suma, item) => suma + item.precio * item.cantidad,
        0
    );

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
            />
            
            <main>
                {paginaActual === "home" && (
                    <Home cambiarPagina={setPaginaActual} />
                )}
                {paginaActual === "catalogo" && (
                    <Catalogo agregarProducto={agregarProducto} />
                )}
            </main>
            
            <Footer />
        </div>
    );
}

export default App;