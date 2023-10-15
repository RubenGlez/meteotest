# Meteotest

## Introducción

Meteotest es una SPA que muestra las predicciones meteorológicas para tres ciudades específicas (Londres, Toronto y Singapur).
La interfaz consta de una cabecera con el título de la app y un selector de idiomas (Inglés y Español) y un widget con formato de pestañas.
Cada una de las pestañas hace referencia a una de las ciudades. Para cada una de las pestañas se muestra una sección con dos bandas:

- Banda superior: Conta de dos secciones:
  - Predicción actual: Muestra el detalle de la predicción meteorológica para la hora seleccionada.
  - Predicción por horas: Muestra un resumen las predicciones por cada hora, para el día seleccionado. Haciendo click en ella, nos mostrará el detalle en la banda superior.
- Banda inferior: Muestra un listado con el resumen de las predicciones por día. La temperatura mínima y máxima son valores calculados a partir de los valores horarios de ese dia en concreto. Haciendo click en alguno de estos elementos, se mostrará el detalle de la predicción en la banda superior.

## Arquitectura

La arquitectura elegida es una adaptación de la arquitectura hexagonal al a programación funcional, donde la lógica de negocio queda totalmente aislada de la lógica presentacional y conseguimos mantener los principios SOLID. La carpeta `core` contiene la lógica de negocio.

- `domain`: Contiene las entidades de dominio de nuestra aplicación
- `application`: Contiene los casos de uso
- `insfrastructure`: Contiene el repositorio de la api y otros útiles como una clase de error que usaremos en este repositorio y el DTO que transforma los datos obtenidos por api a nuestra entidad de dominio

## Gestión del estado

Debido a que es una SPA y no tiene que compartir datos con otras secciones o páginas de la aplicación (en cuyo caso hubiera elegido Redux), se ha optado por usar la api de Context de React. Dejando toda la lógica presentacional dentro de un Provider. El consumo de esta lógica se ha delegado a un hook, que accede a todos los datos del contexto. De esta manera podemos aislar toda la lógica de los componentes.

## UI

Para la capa presentacional se ha seguido la metodología de componentes y contenedores, optado por un diseño atómico de componentes, de esta manera tendremos componentes totalmente reusables, con una mínima lógica y lo mas agnósticos posibles. Estos componentes se encuentran en la carpeta `components`. Por otro lado los contenedores son los que gestionarán toda la lógica.

Para el estilado de los componentes se ha optado por StyledComponents debido a la flexibilidad para crear componentes semánticos que dependen de propiedades, y por la limpieza que aporta ya que nos permite separar el estilado de componentes de las vistas en sí. Además tiene otras ventajas como que añade automáticamente los prefijos específicos de cada navegador.

Para no alargar excesivamente la prueba he decidido no aplicar diseño "responsive" y encajar todo el widget en un contenedor de 800px de ancho.

## Internacionalización

Para dotar a la app de diferentes idiomas se ha optado por hacer uso de la librería `i18n`. Configurando los dos idiomas requeridos. Además también están internacionalizadas tanto las fechas como las temperaturas (celsius / fahrenheit).

## Manejo de errores

Se ha implementado el manejo de errores (en este caso de la petición a la api) mediante un componente de `<Alert/>` , que muestra un mensaje de error. Puede probarse arrancando la app sin conexión a internet.

## Testing

Se incluye un test unitario del componente de Tabs utilizando Jest y React Testing Library.

## Otras consideraciones

Para probar el funcionamiento de la aplicación es necesario descargarse el repositorio en local e instalar las dependencias ejecutando el comando `npm i`. Además es necesario crear una fichero con el nombre `.env` donde setearemos una variable de entorno con la api key del servicio [openweathermap](https://openweathermap.org/forecast5) de esta manera `VITE_OPEN_WEATHER_API_KEY=aqui_la_api_key` (Si es necesario, puedo facilitaros la que yo he creado). Una vez hecho esto ya podemos arrancar la app ejecutando `npm run dev`
