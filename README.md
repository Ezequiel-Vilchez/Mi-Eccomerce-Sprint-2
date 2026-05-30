# 🛒 Mi Ecommerce - Sprint 2

Bienvenido/a al repositorio del **Sprint 2** de Mi Ecommerce.

## 🎯 Objetivos del Sprint
El objetivo principal de este sprint fue conectar las interfaces maquetadas implementando la lógica de negocio y de aplicación, utilizando Javascript, Node.js y Express. 
Nos enfocamos en aplicar el **Patrón MVC (Modelo-Vista-Controlador)** para estructurar el código de manera escalable y ordenada, gestionando datos a través de archivos JSON.

---

## 🏗️ Arquitectura y Estructura (MVC)
El proyecto fue completamente reestructurado siguiendo el patrón MVC y las mejores prácticas de desarrollo para separar las responsabilidades:

* **`controllers/`**: Controladores que manejan la lógica de las peticiones.
* **`models/`**: (Futura capa de datos), actualmente gestionada mediante lectura de JSON.
* **`routes/`**: Definición y separación de rutas de la aplicación.
* **`views/`**: Vistas renderizadas dinámicamente con el motor de plantillas **EJS**. Incorporación de un Layout base (`main.ejs`) para uniformidad.
* **`services/`**: Lógica de negocio extraída de los controladores (ej. `productsService.js` y servicio de carrito) para mantener un código limpio y prepararnos para la integración con Bases de Datos.

---

## 🚀 Funcionalidades Implementadas

A lo largo de 19 User Stories, se implementaron las siguientes características:

### 🛍️ Gestión de Productos
* **Catálogo Dinámico:** Los productos se leen y renderizan desde una fuente de datos JSON real.
* **Detalle de Producto:** Vistas individuales por producto (`/products/:id`) con información completa.
* **Categorías:** Filtrado de productos según su categoría en (`/categories/:category`).
* **Secciones en el Inicio:** Incorporación lógica para mostrar "Productos Sugeridos" y "Los más pedidos".
* **Productos Relacionados:** Sugerencias dinámicas en la vista de detalle de un producto basadas en su categoría.
* **Buscador y Ordenamiento:** Capacidad de buscar productos por nombre y ordenarlos por precio (ascendente/descendente).
* **Control de Stock:** Indicador visual para productos "Sin stock" que deshabilita la opción de compra.

### 🛒 Carrito de Compras (Sesiones)
* **Persistencia temporal:** Implementación de `express-session` para mantener el carrito activo durante la navegación del usuario (`req.session.cart`).
* **Operaciones:** Lógica completa para agregar productos, sumar/restar cantidades, calcular subtotales y el total general, y vaciar el carrito.
* **Indicador global:** Visualización de la cantidad total de ítems del carrito directamente en el Header.
* **Checkout Temporal:** Vista amigable que indica que la pasarela de pago llegará en el próximo sprint.

### 🛡️ Seguridad, Validaciones y Manejo de Errores
* **Validación de Registro:** Lógica estricta en el formulario de registro (validación de campos vacíos, formato de email, y políticas de contraseñas seguras).
* **Normalización de IDs:** Validación robusta para evitar errores silenciosos al buscar productos.
* **Páginas de Error Personalizadas:**
    * **Error 404:** Para rutas o productos no encontrados.
    * **Error 500:** Middleware general para capturar problemas internos del servidor.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js, Express.js
* **Frontend:** HTML5, CSS3, Javascript
* **Template Engine:** EJS
* **Manejo de Sesiones:** express-session
* **Control de Versiones:** Git & GitHub

---
