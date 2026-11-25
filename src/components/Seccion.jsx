function Seccion({ titulo, descripcion }) {
    return (
        <header className="section-heading">
            <p className="eyebrow">La tiendita de tu barrio</p>
            <h2>{titulo}</h2>
            {descripcion && <p>{descripcion}</p>}
        </header>
    );
}

export default Seccion;