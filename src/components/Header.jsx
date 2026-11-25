import { useEffect, useState } from "react";
import Cambio from "./Cambio";
import Carrito from "./Carrito";

function Header({
  cambiarPagina,
  paginaActual,
  carrito,
  aumentar,
  disminuir,
  eliminar,
  total,
  finalizarCompra,
  mensajeCompra,
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cantidadProductos = carrito.reduce(
    (cantidad, item) => cantidad + item.cantidad,
    0
  );

  useEffect(() => {
    if (!menuAbierto) return undefined;

    function cerrarConEscape(evento) {
      if (evento.key === "Escape") setMenuAbierto(false);
    }

    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [menuAbierto]);

  return (
    <>
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">✿</span>
          <div>
            <h1>EL LIRIO</h1>
            <p>La tiendita de tu barrio</p>
          </div>
        </div>

        <div className="header-actions">
          <Cambio
            cambiarPagina={cambiarPagina}
            paginaActual={paginaActual}
          />

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuAbierto}
            aria-controls="side-menu"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            Carrito <span className="cart-count">{cantidadProductos}</span>
          </button>
        </div>
      </header>

      {menuAbierto && (
        <>
          <button
            className="cart-backdrop"
            type="button"
            aria-label="Cerrar carrito"
            onClick={() => setMenuAbierto(false)}
          />
          <aside
            id="side-menu"
            className="side-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            <Carrito
              carrito={carrito}
              aumentar={aumentar}
              disminuir={disminuir}
              eliminar={eliminar}
              total={total}
              cerrar={() => setMenuAbierto(false)}
              finalizarCompra={finalizarCompra}
              mensajeCompra={mensajeCompra}
            />
          </aside>
        </>
      )}
    </>
  );
}

export default Header;