import { useState } from "react";
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
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);

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
            Carrito ({carrito.reduce((cantidad, item) => cantidad + item.cantidad, 0)})
          </button>
        </div>
      </header>

      <aside
        id="side-menu"
        className={`side-menu ${menuAbierto ? "side-menu--open" : ""}`}
        aria-hidden={!menuAbierto}
      >
        <Carrito
          carrito={carrito}
          aumentar={aumentar}
          disminuir={disminuir}
          eliminar={eliminar}
          total={total}
        />
      </aside>
    </>
  );
}

export default Header;