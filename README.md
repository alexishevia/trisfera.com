Página de Trisfera
==================
Esta es la nueva página de Trisfera para el 2012.

¿Qué queremos lograr?
------------------
Queremos lograr una página simple, atractiva y con responsive design.

El objetivo de la página es tener en un solo lugar todo lo necesario para colaborar con Trisfera.

¿En qué está hecha?
------------------
Para darle estructura y estilo a la página estamos utilizando [Bootstrap de Twitter](https://github.com/twitter/bootstrap/)

Para trabajar el CSS de una forma más sencilla y estructurada estamos utilizando [LESS](http://lesscss.org/)

Si vas a trabajar en el sitio, no edites el archivo `css/main.css` directamente. En cambio, edita el archivo `css/main.less` y luego corre los siguientes comandos (necesitas tener node.js instalado):
```
npm install -g less
lessc css/main.less css/main.css
```

¿Quieres correr este proyecto en tu máquina?
-------------------------------------------
Este proyecto es una página web sencilla. Solo tienes que darle doble click al archivo index.html que se encuentra en la carpeta raíz del proyecto.

**Importante**: Si tratas de abrir index.html usando Chrome, te va a aparecer este error en la consola:
```
XMLHttpRequest cannot load file://Projects/PaginaTrisfera/less/main.less. Cross origin requests are only supported for HTTP.
```

Hay dos opciones:

1. Abrirlo desde Firefox
2. Correr la aplicación desde un webserver. En [este tutorial](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) puedes ver cómo correr un webserver fácilmente usando Python.

¿Quieres colaborar?
------------------
Estos son los pasos a aseguir:

- Haz un Fork
- Clona el proyecto (que se encuentra en tu Fork) a tu máquina
- Modifica/crea los archivos para realizar tu aporte y haz los commits a tu Fork
- Haz un Pull Request para integrar tus cambios a este repositorio

Para aprender a hacer todo lo anterior, puedes seguir [esta guía](https://github.com/Trisfera/Trisfera/wiki/Git-y-Github).

¿Tienes alguna duda de cómo funciona algo en este proyecto?
----------------------------------------------------------
Para contactarnos por medio de [nuestro grupo de facebook](https://www.facebook.com/groups/trisfera/)

¿Tienes algún Bug o Feature Request?
-----------------------------------
Por favor añádelo en los [issues del repositorio](https://github.com/Trisfera/PaginaTrisfera/issues).