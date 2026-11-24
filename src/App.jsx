import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";

function App() {
    const [paginaActual, setPaginaActual] = useState("home");
    const [carrito, setCarrito] = useState([]);

    function agregarProducto(producto) {
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