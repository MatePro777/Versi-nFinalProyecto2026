const producto = [
  {
    id: 1,
    nombre: "Coca-Cola 600 ml",
    descripcion: "Refresco de cola de 600 ml",
    categoria: "bebidas",
    precio: 18,
    oferta: 15,
    disponible: true
  },
  {
    id: 2,
    nombre: "Coca-Cola sin azúcar 600 ml",
    descripcion: "Refresco de cola sin azúcar de 600 ml",
    categoria: "bebidas",
    precio: 18,
    disponible: false
  },
  {
    id: 3,
    nombre: "Coca-Cola 2 L",
    descripcion: "Refresco de cola familiar de 2 litros",
    categoria: "bebidas",
    precio: 38,
    disponible: true
  },
  {
    id: 4,
    nombre: "Pepsi 600 ml",
    descripcion: "Refresco de cola de 600 ml",
    categoria: "bebidas",
    precio: 17,
    oferta: 10,
    disponible: true
  },
  {
    id: 5,
    nombre: "Pepsi Black 600 ml",
    descripcion: "Refresco de cola sin azúcar de 600 ml",
    categoria: "bebidas",
    precio: 17,
    disponible: true
  },
  {
    id: 6,
    nombre: "Dr Pepper 600 ml",
    descripcion: "Refresco sabor cereza y cola de 600 ml",
    categoria: "bebidas",
    precio: 18,
    disponible: true
  },
  {
    id: 7,
    nombre: "Sprite 600 ml",
    descripcion: "Refresco sabor lima-limón de 600 ml",
    categoria: "bebidas",
    precio: 17,
    disponible: true
  },
  {
    id: 8,
    nombre: "Fanta Naranja 600 ml",
    descripcion: "Refresco sabor naranja de 600 ml",
    categoria: "bebidas",
    precio: 17,
    disponible: true
  },
  {
    id: 9,
    nombre: "Jarritos de tamarindo 600 ml",
    descripcion: "Refresco de tamarindo de 600 ml",
    categoria: "bebidas",
    precio: 16,
    disponible: true
  },
  {
    id: 10,
    nombre: "Sidral Mundet 600 ml",
    descripcion: "Refresco sabor manzana de 600 ml",
    categoria: "bebidas",
    precio: 17,
    disponible: true
  },
  {
    id: 11,
    nombre: "Agua Ciel 1 L",
    descripcion: "Agua natural embotellada de 1 litro",
    categoria: "bebidas",
    precio: 14,
    oferta: 15,
    disponible: true
  },
  {
    id: 12,
    nombre: "Agua mineral Peñafiel 600 ml",
    descripcion: "Agua mineral de 600 ml",
    categoria: "bebidas",
    precio: 16,
    disponible: true
  },
  {
    id: 13,
    nombre: "Jugo Del Valle de naranja 500 ml",
    descripcion: "Bebida de naranja de 500 ml",
    categoria: "bebidas",
    precio: 15,
    disponible: true
  },
  {
    id: 14,
    nombre: "Boing de mango 500 ml",
    descripcion: "Bebida de mango en envase de 500 ml",
    categoria: "bebidas",
    precio: 14,
    oferta: 10,
    disponible: true
  },
  {
    id: 15,
    nombre: "Leche Lala entera 1 L",
    descripcion: "Leche entera pasteurizada de 1 litro",
    categoria: "lacteos",
    precio: 29,
    disponible: false
  },
  {
    id: 16,
    nombre: "Leche Santa Clara deslactosada 1 L",
    descripcion: "Leche deslactosada de 1 litro",
    categoria: "lacteos",
    precio: 34,
    oferta: 10,
    disponible: true
  },
  {
    id: 17,
    nombre: "Yogur bebible fresa 220 g",
    descripcion: "Yogur bebible sabor fresa",
    categoria: "lacteos",
    precio: 13,
    disponible: true
  },
  {
    id: 18,
    nombre: "Yogur natural 125 g",
    descripcion: "Yogur natural individual",
    categoria: "lacteos",
    precio: 11,
    disponible: true
  },
  {
    id: 19,
    nombre: "Queso panela 200 g",
    descripcion: "Queso panela en presentación de 200 g",
    categoria: "lacteos",
    precio: 42,
    disponible: true
  },
  {
    id: 20,
    nombre: "Mantequilla 90 g",
    descripcion: "Mantequilla en barra de 90 g",
    categoria: "lacteos",
    precio: 24,
    disponible: true
  },
  {
    id: 21,
    nombre: "Pan blanco de caja",
    descripcion: "Pan blanco rebanado",
    categoria: "panaderia",
    precio: 42,
    oferta: 15,
    disponible: true
  },
  {
    id: 22,
    nombre: "Pan integral de caja",
    descripcion: "Pan integral rebanado",
    categoria: "panaderia",
    precio: 48,
    disponible: true
  },
  {
    id: 23,
    nombre: "Conchas surtidas",
    descripcion: "Paquete con 4 piezas",
    categoria: "panaderia",
    precio: 28,
    disponible: false
  },
  {
    id: 24,
    nombre: "Donas glaseadas",
    descripcion: "Paquete con 2 donas",
    categoria: "panaderia",
    precio: 24,
    disponible: true
  },
  {
    id: 25,
    nombre: "Tortillas de maíz 1 kg",
    descripcion: "Tortillas de maíz recién hechas",
    categoria: "abarrotes",
    precio: 26,
    oferta: 10,
    disponible: true
  },
  {
    id: 26,
    nombre: "Arroz 1 kg",
    descripcion: "Arroz blanco de grano largo",
    categoria: "abarrotes",
    precio: 32,
    disponible: true
  },
  {
    id: 27,
    nombre: "Frijol negro 1 kg",
    descripcion: "Frijol negro para cocinar",
    categoria: "abarrotes",
    precio: 38,
    oferta: 15,
    disponible: true
  },
  {
    id: 28,
    nombre: "Azúcar 1 kg",
    descripcion: "Azúcar estándar",
    categoria: "abarrotes",
    precio: 30,
    disponible: true
  },
  {
    id: 29,
    nombre: "Aceite vegetal 850 ml",
    descripcion: "Aceite vegetal para cocinar",
    categoria: "abarrotes",
    precio: 39,
    disponible: true
  },
  {
    id: 30,
    nombre: "Sal de mesa 1 kg",
    descripcion: "Sal yodada para uso diario",
    categoria: "abarrotes",
    precio: 16,
    disponible: true
  },
  {
    id: 31,
    nombre: "Sopa de pasta conchitas 200 g",
    descripcion: "Pasta de trigo para sopa",
    categoria: "abarrotes",
    precio: 12,
    disponible: true
  },
  {
    id: 32,
    nombre: "Atún en agua 140 g",
    descripcion: "Atún en agua en lata",
    categoria: "abarrotes",
    precio: 20,
    disponible: true
  },
  {
    id: 33,
    nombre: "Mayonesa 390 g",
    descripcion: "Mayonesa clásica",
    categoria: "abarrotes",
    precio: 39,
    disponible: true
  },
  {
    id: 34,
    nombre: "Catsup 397 g",
    descripcion: "Salsa de tomate tipo catsup",
    categoria: "abarrotes",
    precio: 25,
    disponible: true
  },
  {
    id: 35,
    nombre: "Papas fritas clásicas 45 g",
    descripcion: "Papas fritas en bolsa individual",
    categoria: "botanas",
    precio: 18,
    oferta: 10,
    disponible: true
  },
  {
    id: 36,
    nombre: "Totopos de maíz 200 g",
    descripcion: "Totopos crujientes de maíz",
    categoria: "botanas",
    precio: 28,
    disponible: true
  },
  {
    id: 37,
    nombre: "Cacahuates salados 100 g",
    descripcion: "Cacahuates tostados con sal",
    categoria: "botanas",
    precio: 18,
    disponible: false
  },
  {
    id: 38,
    nombre: "Palomitas para microondas 90 g",
    descripcion: "Palomitas sabor mantequilla",
    categoria: "botanas",
    precio: 20,
    disponible: true
  },
  {
    id: 39,
    nombre: "Galletas de chocolate 120 g",
    descripcion: "Galletas con chispas de chocolate",
    categoria: "botanas",
    precio: 22,
    disponible: true
  },
  {
    id: 40,
    nombre: "Galletas saladas 150 g",
    descripcion: "Galletas saladas tipo crackers",
    categoria: "botanas",
    precio: 19,
    disponible: true
  },
  {
    id: 41,
    nombre: "Chocolate con leche 90 g",
    descripcion: "Barra de chocolate con leche",
    categoria: "dulces",
    precio: 25,
    oferta: 15,
    disponible: true
  },
  {
    id: 42,
    nombre: "Paleta de caramelo",
    descripcion: "Paleta de caramelo sabor frutal",
    categoria: "dulces",
    precio: 5,
    disponible: true
  },
  {
    id: 43,
    nombre: "Gomitas de frutas 100 g",
    descripcion: "Gomitas surtidas sabor frutal",
    categoria: "dulces",
    precio: 16,
    oferta: 10,
    disponible: true
  },
  {
    id: 44,
    nombre: "Caramelos de menta 50 g",
    descripcion: "Caramelos refrescantes de menta",
    categoria: "dulces",
    precio: 12,
    disponible: true
  },
  {
    id: 45,
    nombre: "Jabón de baño 150 g",
    descripcion: "Jabón para uso diario",
    categoria: "limpieza",
    precio: 18,
    disponible: true
  },
  {
    id: 46,
    nombre: "Detergente en polvo 500 g",
    descripcion: "Detergente para lavar ropa",
    categoria: "limpieza",
    precio: 28,
    disponible: false
  },
  {
    id: 47,
    nombre: "Lavatrastes líquido 500 ml",
    descripcion: "Jabón líquido para trastes",
    categoria: "limpieza",
    precio: 24,
    oferta: 15,
    disponible: true
  },
  {
    id: 48,
    nombre: "Papel higiénico 4 rollos",
    descripcion: "Paquete de papel higiénico",
    categoria: "limpieza",
    precio: 32,
    disponible: true
  },
  {
    id: 49,
    nombre: "Pasta dental 100 ml",
    descripcion: "Pasta dental con flúor",
    categoria: "higiene",
    precio: 29,
    oferta: 10,
    disponible: true
  },
  {
    id: 50,
    nombre: "Shampoo 400 ml",
    descripcion: "Shampoo para uso diario",
    categoria: "higiene",
    precio: 45,
    disponible: false
  },
  {
    id: 51,
    nombre: "Desodorante en aerosol 150 ml",
    descripcion: "Desodorante de uso personal",
    categoria: "higiene",
    precio: 52,
    disponible: true
  }
];

export const categorias = [...new Set(producto.map((item) => item.categoria))];

export function precioConOferta(item) {
  if (!item.oferta) return item.precio;

  return Math.round(item.precio * (1 - item.oferta / 100) * 100) / 100;
}

export function nombreCategoria(categoria) {
  const nombres = {
    lacteos: "Lácteos",
    panaderia: "Panadería",
  };

  return nombres[categoria] || categoria.charAt(0).toUpperCase() + categoria.slice(1);
}

const imagenesPorProducto = {
  1: "https://images.pexels.com/photos/35020136/pexels-photo-35020136.jpeg?auto=compress&cs=tinysrgb&w=640",
  2: "https://images.pexels.com/photos/19504042/pexels-photo-19504042.jpeg?auto=compress&cs=tinysrgb&w=640",
  3: "https://images.pexels.com/photos/7196433/pexels-photo-7196433.jpeg?auto=compress&cs=tinysrgb&w=640",
  4: "https://images.pexels.com/photos/7073594/pexels-photo-7073594.jpeg?auto=compress&cs=tinysrgb&w=640",
  5: "https://images.openfoodfacts.org/images/products/750/102/201/3052/front_en.12.400.jpg",
  6: "https://images.pexels.com/photos/13599788/pexels-photo-13599788.jpeg?auto=compress&cs=tinysrgb&w=640",
  7: "https://images.pexels.com/photos/4161715/pexels-photo-4161715.jpeg?auto=compress&cs=tinysrgb&w=640",
  8: "https://images.pexels.com/photos/39154626/pexels-photo-39154626.jpeg?auto=compress&cs=tinysrgb&w=640",
  9: "https://images.openfoodfacts.org/images/products/009/047/800/0848/front_es.3.400.jpg",
  10: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750105533998L.jpg",
  11: "https://images.pexels.com/photos/35020123/pexels-photo-35020123.jpeg?auto=compress&cs=tinysrgb&w=640",
  12: "https://images.pexels.com/photos/3737800/pexels-photo-3737800.jpeg?auto=compress&cs=tinysrgb&w=640",
  13: "https://images.pexels.com/photos/14510445/pexels-photo-14510445.jpeg?auto=compress&cs=tinysrgb&w=640",
  14: "https://images.pexels.com/photos/8453561/pexels-photo-8453561.jpeg?auto=compress&cs=tinysrgb&w=640",
  15: "https://images.pexels.com/photos/4578396/pexels-photo-4578396.jpeg?auto=compress&cs=tinysrgb&w=640",
  16: "https://images.pexels.com/photos/5946755/pexels-photo-5946755.jpeg?auto=compress&cs=tinysrgb&w=640",
  17: "https://images.pexels.com/photos/1098758/pexels-photo-1098758.jpeg?auto=compress&cs=tinysrgb&w=640",
  18: "https://images.pexels.com/photos/13466256/pexels-photo-13466256.jpeg?auto=compress&cs=tinysrgb&w=640",
  19: "https://images.pexels.com/photos/11115801/pexels-photo-11115801.jpeg?auto=compress&cs=tinysrgb&w=640",
  20: "https://images.pexels.com/photos/40193381/pexels-photo-40193381.jpeg?auto=compress&cs=tinysrgb&w=640",
  21: "https://images.pexels.com/photos/1070465/pexels-photo-1070465.jpeg?auto=compress&cs=tinysrgb&w=640",
  22: "https://images.pexels.com/photos/28354523/pexels-photo-28354523.jpeg?auto=compress&cs=tinysrgb&w=640",
  23: "https://images.pexels.com/photos/17119614/pexels-photo-17119614.png?auto=compress&cs=tinysrgb&w=640",
  24: "https://images.pexels.com/photos/30822876/pexels-photo-30822876.jpeg?auto=compress&cs=tinysrgb&w=640",
  25: "https://images.pexels.com/photos/5737825/pexels-photo-5737825.jpeg?auto=compress&cs=tinysrgb&w=640",
  26: "https://images.pexels.com/photos/31555431/pexels-photo-31555431.jpeg?auto=compress&cs=tinysrgb&w=640",
  27: "https://images.pexels.com/photos/31672561/pexels-photo-31672561.jpeg?auto=compress&cs=tinysrgb&w=640",
  28: "https://images.pexels.com/photos/37105582/pexels-photo-37105582.jpeg?auto=compress&cs=tinysrgb&w=640",
  29: "https://images.pexels.com/photos/992820/pexels-photo-992820.jpeg?auto=compress&cs=tinysrgb&w=640",
  30: "https://images.pexels.com/photos/7599053/pexels-photo-7599053.jpeg?auto=compress&cs=tinysrgb&w=640",
  31: "https://images.pexels.com/photos/5987887/pexels-photo-5987887.jpeg?auto=compress&cs=tinysrgb&w=640",
  32: "https://images.pexels.com/photos/14426299/pexels-photo-14426299.jpeg?auto=compress&cs=tinysrgb&w=640",
  33: "https://images.pexels.com/photos/33775646/pexels-photo-33775646.jpeg?auto=compress&cs=tinysrgb&w=640",
  34: "https://images.pexels.com/photos/39056589/pexels-photo-39056589.jpeg?auto=compress&cs=tinysrgb&w=640",
  35: "https://images.pexels.com/photos/13060679/pexels-photo-13060679.jpeg?auto=compress&cs=tinysrgb&w=640",
  36: "https://images.pexels.com/photos/7033652/pexels-photo-7033652.jpeg?auto=compress&cs=tinysrgb&w=640",
  37: "https://images.pexels.com/photos/35237495/pexels-photo-35237495.jpeg?auto=compress&cs=tinysrgb&w=640",
  38: "https://images.pexels.com/photos/10234160/pexels-photo-10234160.jpeg?auto=compress&cs=tinysrgb&w=640",
  39: "https://images.pexels.com/photos/31116124/pexels-photo-31116124.jpeg?auto=compress&cs=tinysrgb&w=640",
  40: "https://images.pexels.com/photos/36134940/pexels-photo-36134940.jpeg?auto=compress&cs=tinysrgb&w=640",
  41: "https://images.pexels.com/photos/12941393/pexels-photo-12941393.jpeg?auto=compress&cs=tinysrgb&w=640",
  42: "https://images.pexels.com/photos/1280730/pexels-photo-1280730.jpeg?auto=compress&cs=tinysrgb&w=640",
  43: "https://images.pexels.com/photos/539447/pexels-photo-539447.jpeg?auto=compress&cs=tinysrgb&w=640",
  44: "https://images.pexels.com/photos/12436390/pexels-photo-12436390.jpeg?auto=compress&cs=tinysrgb&w=640",
  45: "https://images.pexels.com/photos/13872556/pexels-photo-13872556.jpeg?auto=compress&cs=tinysrgb&w=640",
  46: "https://images.pexels.com/photos/5591837/pexels-photo-5591837.jpeg?auto=compress&cs=tinysrgb&w=640",
  47: "https://images.pexels.com/photos/7351645/pexels-photo-7351645.jpeg?auto=compress&cs=tinysrgb&w=640",
  48: "https://images.pexels.com/photos/3958192/pexels-photo-3958192.jpeg?auto=compress&cs=tinysrgb&w=640",
  49: "https://images.pexels.com/photos/14456100/pexels-photo-14456100.jpeg?auto=compress&cs=tinysrgb&w=640",
  50: "https://images.pexels.com/photos/13006788/pexels-photo-13006788.jpeg?auto=compress&cs=tinysrgb&w=640",
  51: "https://images.pexels.com/photos/30723567/pexels-photo-30723567.jpeg?auto=compress&cs=tinysrgb&w=640",
};

export default producto.map((item) => ({
  ...item,
  imagen: imagenesPorProducto[item.id],
}));