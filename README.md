## Our Democracy Client

[travis-image]: https://travis-ci.org/gpincheiraa/our-democracy-client.png
[travis-url]: https://travis-ci.org/gpincheiraa/our-democracy-client

[codeclimate-image]: https://codeclimate.com/github/gpincheiraa/our-democracy-client/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/gpincheiraa/our-democracy-client

[codeclimate-coverage-image]: https://codeclimate.com/github/gpincheiraa/our-democracy-client/badges/coverage.svg
[codeclimate-coverage-url]: https://codeclimate.com/github/gpincheiraa/our-democracy-client/coverage

[codeclimate-issues-image]: https://codeclimate.com/github/gpincheiraa/our-democracy-client/badges/issue_count.svg
[codeclimate-issues-url]: https://codeclimate.com/github/gpincheiraa/our-democracy-client

[![Build Status][travis-image]][travis-url] [![Code Climate][codeclimate-image]][codeclimate-url] [![Test Coverage][codeclimate-coverage-image]][codeclimate-coverage-url][![Issue Count][codeclimate-issues-image]][codeclimate-issues-url]

### Desarrollo
	
### Requisitos

	- Docker
	- git

### Instalación 

	- `sh build` y elegir un nombre para la imagen
	- `sh run-container` y elegir el nombre de la imagen recién creada y un nombre para el contenedor. Una vez ejecutado este comando aparecerás dentro del container (en la consola bash)
	- Para salir del container `ctrl + d`. Para ingresar al container `docker start -ia <nombre-del-contenedor>`
	- Dentro del contenedor ejecutar `npm install && bower install`
	- Una vez instaladas las dependencias de desarrollo y del proyecto, ejecutar `grunt` para ejecutar las tareas automatizadas.

#### Tareas automatizadas ejecutadas por defecto

	- Cacheado de templates.
	- Compilación de jade a HTML.
	- Compilacion de scss a CSS.
	- Aplicación automática de prefijos CSS cross-browser.
	- Inyección de scripts, CSS y Fonts en `index.html` y solo scripts en `karma.conf.js`.
	- Suite de tests con Karma.
	- Reporte de coverage.

#### Guía de estilo de programación

	Se utilizó la siguiente guía de estilos para desarrollar proyectos Angular 1.x: https://github.com/johnpapa/angular-styleguide/tree/master/a1