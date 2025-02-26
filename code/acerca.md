---
layout: layout-base.njk
title: ¿Cómo usar este starter project?
description: En esta página encontrarás instrucciones para configurar y personalizar este starter project.
tags: ["pages"]
date: "2025-01-07"
---

# {{ title }}

Para sacar el máximo provecho de este _starter project_ te sugiero leer la [documentación oficial de _Eleventy_](https://www.11ty.dev/docs/) y personalizarlo a tu gusto y necesidades, pues este proyecto contiene una estructura muy básica para comenzar desarrollar proyectos web minimalistas y desplegarlos en _GitHub Pages_.

A continuación te doy una revisión de las características que incluye.

## Lenguajes de plantillas

En _Eleventy_ puedes usar difernetes [lenguajes de plantillas](https://www.11ty.dev/docs/languages/) para crear páginas y artículos de _blog_, este _starter project_ usa: _**Markdown**_, _**HTML**_ y [_**Nunjucks**_](https://mozilla.github.io/nunjucks/).

Para revisar la sintaxis y estructura de dichos formatos puedes abrir en tu editor de código los archivos _`index.html`_, _`acerca.md`_ y _`blog.njk`_ que encuentras en la carpeta "_**`code`**_" de este proyecto.

## Estructura de Proyecto

La estructura de carpetas y archivos es la siguiente:

```terminal
code/
  _data/
  _includes/
  public/
  blog/
  index.md
  acerca.html
  blog.njk
docs/
.gitignore
eleventy.config.js
package-lock.json
package.json
README.md
```

- **_`code`_** es la carpeta que contiene el código fuente del proyecto, dentro de ella encontrarás:
  - **_`_data`_**: es la carpeta por defecto que _Eleventy_ utiliza para almacenar datos globales a los que se puede acceder desde cualquier plantilla del proyecto. Estos datos pueden estar en archivos _JSON_, _YAML_ o _JavaScript_. Sirven para inyectar contenido dinámico en las plantillas sin tener que codificar esos datos directamente en ellas. Es una forma centralizada de gestionar información reutilizable, como configuraciones o colecciones de datos, que se pueden usar en varios lugares del proyecto.
  - **_`_includes`_**: es la carpeta por defecto que _Eleventy_ utiliza para almacenar fragmentos de plantillas o componentes reutilizables, como encabezados, pies de página o cualquier sección común que quieras incluir en varias páginas. Estos fragmentos se pueden insertar fácilmente en otras plantillas mediante la etiqueta _"`include`"_. De esta forma, puedes organizar y reutilizar partes comunes de tu proyecto de manera eficiente y ordenada. Revisa los archivos _`layout-base.njk`_, _`header.njk`_ y _`footer.njk`_ que encontrarás en esta carpeta y revisa su código para que veas como forman la estructura general del proyecto.
  - **_`blog`_**: en esta carpeta deberás colocar todos los archivos que quieres que sean artículos de _blog_, puedes usar los formatos _.md_, _.html_ o _.njk_ para crear tus artículos, usa el formato que mejor te convenga.
  - **_`index.html`_**: es un página de ejemplo en formato _HTML_.
  - **_`acerca.md`_**: es un página de ejemplo en formato _Markdown_.
  - **_`blog.njk`_**: es un página de ejemplo en formato _Nunjucks_.
- **_`docs`_**: es la carpeta que contiene el código estático generado por _Eleventy_ que se desplegará en _GitHub Pages_, para que esto suceda, ve a la sección **_Settings_** de tu repositorio, opción **_Pages_** y en ella configura que la carpeta **_`docs`_** despliegue la rama _main_ en _GitHub Pages_.
  ![Configurar GitHub Pages](/img/configurar-github-pages.png)
- **_`.gitignore`_**: Archivo de _Git_ para ignorar archivos y carpetas que no quieres que se suban al repositorio de código.
- **_`eleventy.config.js`_**: Archivo de configuración de _Eleventy_.
- **_`packagelock.json`_**: Archivo de dependencias _Node_ del proyecto.
- **_`package.json`_**: Archivo de dependencias _Node_ del proyecto.
- **_`README.md`_**: Archivo _README_ del proyecto.

## Formato de configuración _YAML_

En _Eleventy_, el formato _YAML_ se utiliza en el bloque _front matter_ (al inicio de cada archivo) para definir metadatos. Estos permiten configurar la plantilla a utilizar, establecer títulos, descripciones, etiquetas, fechas y otros parámetros que Eleventy emplea para generar y organizar el contenido del sitio de manera dinámica y optimizada para SEO.

Al inicio de cada uno de los archivos de plantilla de tipo página o artículo de blog encontrarás los siguientes metadatos:

```yaml
---
layout: layout-base.njk
title: Hola Mundo 🦡🎈
description: Este es un starter project para gestionar y desplegar proyectos web minimalistas con Eleventy 3 y Github Pages.
tags: ["pages", "blog", "peliculas", "series"]
date: "2025-02-20"
---
```

### Descripción de los campos:

- **_`layout`_**: Define la plantilla que se utilizará para renderizar la página (en este caso, layout-base.njk).
- **_`title`_**: Es el título de la página que se mostrará en el `<title>` del _HTML_ y en los encabezados de la misma.
- **_`description`_**: Una breve descripción del contenido de la página, útil para la optimización _SEO_.
- **_`tags`_**: Lista de etiquetas para categorizar el contenido (páginas y artículos) y ayudar a organizar las colecciones.
- **_`date`_**: Fecha de publicación de la página, utilizada para ordenar o mostrar la información.

Recuerda que puedes agregar tantos metadatos como necesites en tu proyecto. Estos campos te permiten personalizar la forma en que _Eleventy_ procesa, organiza y muestra tu contenido, facilitando la generación dinámica de páginas y la integración de características específicas según los requerimientos de tu proyecto.

## Archivo de metadatos del proyecto

Este archivo exporta un objeto de configuración que define metadatos esenciales para el proyecto. Los atributos incluidos son:

```js
export default {
  siteUrl: "https://example.com",
  pathPrefix: "/repo-name/",
  language: "es",
  title: "Eleventy 3 & Github Pages Starter Project",
  description:
    "Este es un starter project para gestionar y desplegar proyectos web minimalistas con Eleventy 3 y Github Pages.",
};
```

- **_`siteURL`_**: La URL principal del proyecto.
- **_`pathPrefix`_**: Define el prefijo de la ruta del proyecto, esto es fundamental para que las rutas y enlaces generados sean correctos. Cuando se despliega en:
  - Una subcarpeta del servidor: el valor debe ser el nombre de dicha carpeta, incluyendo las "**`/`**" del inicio y final como en el código de ejemplo.
  - La carpeta raíz del servidor: el valor debe ser "**`/`**".
- **_`language`_**: El idioma del proyecto.
- **_`title`_**: El título del proyecto, que puede aparecer en la etiqueta `<title>` del _HTML_.
- **_`description`_**: Una breve descripción del proyecto, útil para SEO y para proporcionar contexto sobre el propósito del mismo.

Puedes ver un ejemplo de cómo se invocan estos metadatos en el archivo **_`layout-base.njk`_**.

Recuerda que puedes agregar tantos metadatos como necesites en tu proyecto.

<div class="box-message">

### ¡Importante! Si despliegas en _GitHub Pages_:

Debes cambiar el valor del atributo **_`pathPrefix`_** al nombre de tu repositorio en _GitHub_. Por ejemplo, si tu repositorio se llama **_`mi-proyecto`_**, actualiza este valor a "**_`/mi-proyecto/`_**".

</div>

## Rutas y enlaces de la carpeta _Public_

<div class="box-message">

### **¡Importante!**

Para un correcto despliegue de tus archivos públicos (los que están en la carpeta `public`) como imágenes, tipografías, archivos _CSS_ o _JS_, etc; debes enlazarlos pensando en que están desde la raíz del servidor por ejemplo:

```html
<link rel="stylesheet" href="/css/styles.css" />

<script src="/js/main.js" type="module"></script>

<img src="/img/eleventy.svg" alt="Eleventy Logo" />

<a href="/acerca/">Acerca</a>
```

Cómo ves en los ejemplos de código, todas las rutas empiezan con la `/` que hace referencia a la raíz del servidor.

</div>
