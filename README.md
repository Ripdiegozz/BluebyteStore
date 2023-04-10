# Bluebyte Ecommerce

Este proyecto es un sitio web de comercio electrónico. Utiliza HTML, CSS, TailwindCSS, JavaScript, React.js, React Hooks, Next.js, Sanity y Stripe. El proyecto cuenta con un carrito de compras funcional, un selector de cantidad de productos y pagos realizados a través de Stripe.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado Node.js y npm en tu computadora.

## Instalación

1. Clona el repositorio en tu computadora:

```bash
git clone https://github.com/Ripdiegozz/BluebyteStore.git
```
2. Entra al directorio del proyecto:

```bash
cd BluebyteStore
```
3. Instala las dependencias:

```bash
npm install
```
4. Crea un archivo .env en el directorio raíz y añade las siguientes variables de entorno:

```makefile
NEXT_PUBLIC_SANITY_URL=<tu-api-key-de-Sanity>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<tu-public-key-de-Stripe>
NEXT_PUBLIC_STRIPE_SECRET_KEY =<tu-clave-private-key-de-Stripe>
```
5. Ejecuta el proyecto:
```arduino
npm run dev
```

## Tecnologías

Este proyecto está desarrollado utilizando las siguientes tecnologías:

- HTML: lenguaje de marcado para la estructura del sitio web

- CSS: lenguaje de estilos para dar diseño y apariencia al sitio web

- JavaScript: lenguaje de programación para agregar interactividad al sitio web

- React.js: biblioteca de JavaScript para construir interfaces de usuario

- Next.js: framework de React.js para construir aplicaciones web de una sola página (SPA)

- Sanity: plataforma de contenido que permite gestionar el contenido del sitio web

- Stripe: plataforma de pagos en línea que permite procesar pagos en el sitio web

## Funcionalidades

1. Búsqueda de productos por nombre, categoría y precio
2. Selección de productos y agregado al carrito de compras con selector de cantidad
3. Vista del carrito de compras con resumen de productos y precios
4. Proceso de pago utilizando Stripe para procesar el pago y finalizar la compra

## Contacto

Si tienes alguna pregunta, sugerencia o comentario sobre este proyecto, no dudes en contactarme en el siguiente correo electrónico: dagadev@proton.me.

*¡Gracias por utilizar mi sitio web!*
