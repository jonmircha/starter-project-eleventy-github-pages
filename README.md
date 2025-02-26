# _Starter Project Eleventy 3 + Github Pages_

Este repositorio es un _starter project_ para gestionar y desplegar el desarrollo de proyectos _web_ minimalistas con [_**Eleventy 3**_](https://www.11ty.dev/) y _**Github Pages**_.

## Instrucciones

1. Clona este repositorio.
   ```bash
   git clone https://github.com/jonmircha/starter-project-eleventy-github-pages.git
   ```
1. Instala las dependencias.
   ```bash
   npm install
   ```
1. Iniciar el ambiente de desarrollo.
   ```bash
   npm start
   ```
1. Edita **`_data/metadata.js`** con la información de tu proyecto.
   ```js
   export default {
     siteUrl: "https://example.com",
     pathPrefix: "/nombre-repositorio/",
     language: "es",
     title: "Eleventy 3 & Github Pages Starter Project",
     description:
       "Este es un starter project para gestionar y desplegar proyectos web minimalistas con Eleventy 3 y Github Pages.",
   };
   ```
1. Comienza a crear el contenido de tu proyecto web.
1. Cuando termines de desarrollar tu proyecto, limpia la carpeta docs y ejecuta el despliegue:
   ```bash
   npm run clean
   npm run build
   ```
1. Crea un repositorio en tu cuenta de _GitHub_.
1. Vincula la carpeta local con el repositorio remoto.
1. Modifica la propiedad **`pathPrefix`** con el nombre del repositorio de _GitHub_ en el archivo **`_data/metadata.js`**.
1. Sube el contenido a _GitHub_.
1. Asegura que el repositorio tenga activado _**GitHub Pages**_ en la rama _**main**_, para desplegar la carpeta _**docs**_.
   ![Configurando GitHub Pages](./code/public/img/configurar-github-pages.png)
1. ¡Listo! Lo haz logrado. Felíz despliegue 🥳 🦡🎈.

[Aquí](https://jonmircha.github.io/starter-project-eleventy-github-pages/) puedes ver la demo de este _starter project_.

Para más información revisa la sección [Acerca](https://jonmircha.github.io/starter-project-eleventy-github-pages/acerca) de la demo.

Tambien puedes ver mi Curso de _Eleventy_ en _YouTube_, da clic a la siguiente imagen. 👇🏻

[![Curso Eleventy](./code/public/img/curso-youtube-eleventy.png)](https://www.youtube.com/watch?v=yCF9l4_E5rI)
