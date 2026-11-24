function ProductCard({ producto, agregarProducto }) {

    return (
        
        <div className="product-card">
  <div className="product-card__image" aria-hidden="true">🥤</div>

  <div className="product-card__details">
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
    <p className="p-precio">${producto.precio.toFixed(2)}</p>
  </div>

  <button onClick={() => agregarProducto(producto)}>
    Agregar al Carrito
  </button>
</div>

    );
}

export default ProductCard;