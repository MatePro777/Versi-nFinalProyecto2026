# EL LIRIO

Tienda de demostración hecha con React y Vite. Permite buscar productos,
filtrarlos por categoría, ver su disponibilidad y confirmar un pedido de prueba.
No se procesan pagos ni se envían pedidos reales.

Al entrar, el cliente registra su nombre y dirección, que se guardan en el
navegador para mostrarlos en el carrito. Al confirmar, se abre WhatsApp con el
pedido, el total y los datos de entrega ya escritos; el cliente debe revisar y
enviar el mensaje desde WhatsApp. No se envían mensajes automáticamente ni se
procesan pagos reales. El formulario de sugerencias también abre WhatsApp con el
nombre, grupo y sugerencia preparados para que el cliente confirme el envío.

## Imágenes de productos

Cada producto tiene su propio enlace de imagen en `src/data/productos.js`;requieren conexión a internet. Si un enlace falla, se muestra
un icono de categoría.

## Desarrollo
