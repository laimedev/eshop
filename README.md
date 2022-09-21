# Prueba eShop

- Mostrar todos los productos en una página agrupados por categoría.
- Se debe mostrar la imagen, nombre y precio del producto junto a un botón que lo
agregue a un carrito de compra.
- Se deben guardar los productos seleccionado en el carrito de compra.
- Se debe visualizar un botón donde se vea cuantos productos hay en el carrito.
- Al hacer clic en el botón se debe mostrar un popup el listado de los productos del
carrito con su precio y el total a pagar.
- Al hacer clic en el producto me debe redireccionar a otra página donde se muestre el
detalle del producto.
- Se debe incluir el botón de agregar al carrito de compra.

## Recursos

- Creación de 2 API

		1.  Obtener listado de productos
		 GET  https://eshop-prueba.herokuapp.com/productos 

		2.  Obtener  producto por Identificador
		 POST  https://eshop-prueba.herokuapp.com/productos/show 
		 

- Bootstrap 

		 https://ng-bootstrap.github.io/#/home


**Ejecutar el localhost**

		 npm install - [para descargar las dependencias del proyecto]
		 ng serve -o --port 4203 - [ejecutar en el server local asignandole un puerto]

**Vista Previa (abrir)**

		 https://eshop.laimedev.com

### Gracias!!