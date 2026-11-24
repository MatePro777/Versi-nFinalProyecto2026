import producto from "../data/productos";
import ProductCard from "../components/ProductCard";
import Carrito from "../components/Carrito";

function Catalogo({ agregarProducto }) {

    return (

        <section className="catalogo">
            <div>

                <h2>Nuestros productos</h2>

                {producto.map((prod) => (
                <ProductCard
                    key={prod.id}
                    producto={prod}
                    agregarProducto={agregarProducto}
                />

                
            ))}

                

            </div>
        </section>

    );
}

export default Catalogo;