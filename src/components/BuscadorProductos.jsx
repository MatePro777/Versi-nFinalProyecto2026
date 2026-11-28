import { useEffect, useMemo, useRef, useState } from "react";
import producto, { nombreCategoria } from "../data/productos";

function normalizar(texto) {
    return texto
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function BuscadorProductos({ busqueda, cambiarBusqueda }) {
    const [abierto, setAbierto] = useState(false);
    const [indiceActivo, setIndiceActivo] = useState(-1);
    const contenedor = useRef(null);
    const sugerencias = useMemo(() => {
        const termino = normalizar(busqueda.trim());
        if (!termino) return [];

        return producto
            .filter((item) => normalizar(item.nombre).includes(termino))
            .sort((itemA, itemB) => {
                const prioridad = (item) => {
                    const nombre = normalizar(item.nombre);
                    if (nombre.startsWith(termino)) return 0;
                    if (nombre.split(/[\s-]+/).some((palabra) => palabra.startsWith(termino))) {
                        return 1;
                    }
                    return 2;
                };

                return (
                    prioridad(itemA) - prioridad(itemB) ||
                    Number(itemB.disponible) - Number(itemA.disponible)
                );
            })
            .slice(0, 6);
    }, [busqueda]);
    const mostrarSugerencias = abierto && sugerencias.length > 0;

    useEffect(() => {
        function cerrarAlHacerClicFuera(evento) {
            if (!contenedor.current?.contains(evento.target)) {
                setAbierto(false);
                setIndiceActivo(-1);
            }
        }

        document.addEventListener("mousedown", cerrarAlHacerClicFuera);
        return () => document.removeEventListener("mousedown", cerrarAlHacerClicFuera);
    }, []);

    function seleccionarSugerencia(item) {
        cambiarBusqueda(item.nombre);
        setAbierto(false);
        setIndiceActivo(-1);
    }

    function manejarTeclas(evento) {
        if (evento.key === "Escape") {
            setAbierto(false);
            setIndiceActivo(-1);
            return;
        }

        if (!sugerencias.length) return;

        if (evento.key === "ArrowDown") {
            evento.preventDefault();
            setAbierto(true);
            setIndiceActivo((actual) => (actual + 1) % sugerencias.length);
        } else if (evento.key === "ArrowUp") {
            evento.preventDefault();
            setAbierto(true);
            setIndiceActivo((actual) =>
                actual <= 0 ? sugerencias.length - 1 : actual - 1
            );
        } else if (evento.key === "Enter" && indiceActivo >= 0) {
            evento.preventDefault();
            seleccionarSugerencia(sugerencias[indiceActivo]);
        }
    }

    return (
        <div className="search-field-wrapper" ref={contenedor}>
            <label className="search-field">
                <span aria-hidden="true">⌕</span>
                <input
                    type="search"
                    role="combobox"
                    value={busqueda}
                    onChange={(evento) => {
                        cambiarBusqueda(evento.target.value);
                        setAbierto(true);
                        setIndiceActivo(-1);
                    }}
                    onFocus={() => setAbierto(true)}
                    onKeyDown={manejarTeclas}
                    placeholder="Buscar productos..."
                    aria-label="Buscar productos"
                    aria-autocomplete="list"
                    aria-expanded={mostrarSugerencias}
                    aria-controls="product-search-suggestions"
                    aria-activedescendant={
                        mostrarSugerencias && indiceActivo >= 0
                            ? `product-suggestion-${sugerencias[indiceActivo].id}`
                            : undefined
                    }
                    autoComplete="off"
                />
            </label>

            {mostrarSugerencias && (
                <ul
                    id="product-search-suggestions"
                    className="search-suggestions"
                    role="listbox"
                    aria-label="Sugerencias de productos"
                >
                    {sugerencias.map((item, indice) => (
                        <li key={item.id} role="presentation">
                            <button
                                id={`product-suggestion-${item.id}`}
                                className="search-suggestion"
                                type="button"
                                role="option"
                                aria-selected={indice === indiceActivo}
                                onMouseDown={(evento) => evento.preventDefault()}
                                onMouseEnter={() => setIndiceActivo(indice)}
                                onClick={() => seleccionarSugerencia(item)}
                            >
                                <span>{item.nombre}</span>
                                <span className="search-suggestion__category">
                                    {nombreCategoria(item.categoria)}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BuscadorProductos;
