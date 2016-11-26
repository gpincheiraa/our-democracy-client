[Volver](README.md)

#### Tareas automatizadas
Para ejecutar tareas utilizamos el paquete de node llamado **`grunt`** y toda la configuración asociada se encuentra en el archivo **`gruntfile.js`**.
El ambiente necesario para trabajar con estas tareas automatizadas se instala ejecutando **`npm install`**.
Esto hace que se instalen todas las dependencias de **`node`** que conformarán nuestro ambiente de desarrollo, tal como lo hace un IDE, pero con la diferencia que podemos modificar los paquetes y su configuración a nuestro antojo. 

La sintáxis para ejecutar una tarea es

```javascript
	grunt nombre_tarea
```
Ejemplo:

```javascript
	grunt ngtemplates
```

A continuación una lista de las principales tareas automatizadas disponibles:


- **`jade`**: Tarea encargada de procesar los archivos **`.jade`** y transformarlos en html. La ruta donde se guardarán los html generados se encuentra en el archivo **`gruntfile.js`** en la variable **`HTML_DEST`**.

- **`ngtemplates`**: Tarea encargada de tomar todos los html generados por la tarea **`jade`** y juntarlos en un solo archivo llamado **`templates.js`**. El propósito de esta tarea es que todos los templates html utilizados por angular estén disponibles sin la necesidad de hacer una petición HTTP en busca del html necesario. Para configurar esta tarea dependemos de 3 variables dentro de **`gruntfile.js`**. 
    - **`ANGULAR_MAIN_MODULE`**: Nombre del módulo principal de la aplicación angular.
    - **`ANGULAR_TEMPLATES_SRC`**: Ruta donde se encuentran los templates html.
    - **`ANGULAR_TEMPLATES_DEST`**: Ruta y nombre del archivo que se generará.

- **`wiredep`**: Tarea que se encarga de "escanear" el directorio bower components y seleccionar los archivos de las librerías/plugins javascript y css que serán inyectados en el archivo **`index.html`** y en el archivo **`karma.conf.js`**.  Las rutas de destino de cada uno de estos archivos se configuran en **`gruntfile.js`** en las variables  **`WIREDEP_APP_DEST`** y **`WIREDEP_TEST_DEST`**.

- **`compass`** y  **`postcss`**: Tareas encargadas de procesar css. La tarea **`compass`** se encarga de procesar los archivos **`.scss`** contenidos en la carpeta **`src`** y transformarlos en css. 
En el archivo **`gruntfile.js`** en las variables **`COMPASS_SRC`** y **`COMPASS_DEST`** configuramos la ruta de donde leemos los archivos scss y la ruta donde se guardarán los archivos css respectivamente.
La tarea **`postcss`** se encarga de normalizar el css para que tenga atributos disponibles en todos los navegadores.

- **`injector`**: Tarea encargada de tomar los archivos js y css generados en el proyecto y los inyecta en el archivo **`index.html`**.
En la variable **`INJECTOR_ARRAY_SRC`** de **`gruntfile.js`** definimos un array con las rutas que inspeccionaremos en busca de archivos js y css.

- **`shell:test`**: Tarea encargada de ejecutar el comando **`karma start`, necesario para correr los test unitarios de la aplicación.

- **`connect:server`**: Tarea encargada de servir la aplicación para poder ser visualizada al momento de desarrollar. Viene configurada para servir la aplicación en la ruta **`http:localhost:9000`**.


- **`watch`**: Tarea encargada de "escuchar" los cambios en los archivos del proyecto y recargar el navegador automaticamente. En el archivo **`gruntfile.js`** contamos con los objetos **`FILES_FOR_WATCH`** Y **`TASKS_WHEN_FILES_CHANGE`**. El primero define que archivos escucharemos y el segundo que tareas se ejecutarán cuando estos archivos cambien.

[Volver](README.md)