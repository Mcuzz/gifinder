# Preguntas de cierre - EC1 F3 A4
## 1. ¿Qué diferencia existe entre una operación síncrona y una asíncrona?
La operacion sincrina necesita ejecutar el programa de forma secuencial, concretanto cada operacion previa antes de llegar a la tarea objetivo. La asincrona puede ir directo al punto, lanzando la tarea pero sin esperar a que se ejecute el programa por completo antes de llegar a ella. 

## 2. ¿Cuáles son los estados de una promesa y qué relación tienen con async/await?
Los estados de una promesa pueden ser "pendiente", "cumplida", o "rechazada", y se relacionan en que la promesa es el representante de una operacion asinc que para cumplirse puede estar pendiente, cumplida o rechazada. Asinc hace que las funciones regresen promesas y await pausa la ejecucion dentro de la funcion asinc hasta que la promesa llegue al estado de cumplida o rechazada. 

## 3. ¿Qué devuelve fetch y qué devuelve response.json()?
fetch regresa una promesa que se resuelve a un objeto response, (completa o rechazada) y response.json regresa otra promesa que se resuelve a contenido del cuerpo del json. 

## 4. ¿Por qué es necesario comprobar response.ok?
Porque fetch no arroja errores cuando el servidor tiene error 404 o 500. 

## 5. ¿Cómo se utilizan try, catch y unknown para manejar errores en GIFinder?
try intenta conectar con la api y procesar resultados, catch atrapa cualquier interrupcion y unknown proteje el codigo obligandome a validar el error (instanceof error) antes de que parezca que se rompio la aplicacion.
## 6. ¿Qué diferencia existe entre GiphyGif y Gif, y qué responsabilidad tiene mapGiphyGif?

giphyGif representa la estructura de los datos que se reciben directamente desde la API de GIPHY, incluyendo información como el título, usuario, clasificación e imágenes en diferentes tamaños. Gif representa el modelo interno que utiliza GIFinder, con datos más simples y estables para la interfaz. La función `mapGiphyGif` se encarga de transformar cada objeto `GiphyGif` en un objeto `Gif`, seleccionando y adaptando únicamente la información que necesita la aplicación.

## 7. ¿Por qué se utiliza URLSearchParams al construir la solicitud?

Se utiliza `URLSearchParams` para construir y codificar correctamente los parámetros que se agregan a la URL de la solicitud. En GIFinder permite incluir parámetros como la clave de API, el límite de resultados, la clasificación y, en las búsquedas, la consulta `q` y el idioma `lang`. Esto evita tener que construir manualmente la cadena de consulta y permite que caracteres especiales o espacios sean codificados correctamente.

## 8. ¿Qué significa Promise<Gif[]> en el tipo de retorno?

significa que la función no entrega inmediatamente un arreglo de objetos Gif, sino que devolverá posteriormente una promesa cuyo resultado será un arreglo de Gif. 

## 9. ¿Qué diferencia existe entre .env.local y .env.example, y por qué una variable VITE_ no debe considerarse secreta?

`.env.local` contiene la configuración local del proyecto y, en esta actividad almacena el valor real de `VITE_GIPHY_API_KEY`. Este archivo debe mantenerse fuera del repositorio. Y `.env.example` solamente muestra el nombre de la variable que necesita el proyecto, sin contener la clave real, por lo que sí puede publicarse.

## 10. ¿Cómo comprobaste que .env.local no está versionado?

Con los comandos `git check-ignore -v .env.local` y `git ls-files .env.local`. 

## 11. ¿Por qué Loading puede observarse con mayor claridad al consultar una API?

Porque una solicitud a una API implica una operación de red que tarda cierto tiempo en completarse. A diferencia de los datos locales, que pueden estar disponibles inmediatamente, una solicitud mediante `fetch` debe esperar la respuesta del servidor. Por ello, GIFinder cambia el estado a `Loading` antes de realizar la solicitud y muestra el mensaje `Consultando GIPHY...` mientras espera el resultado.

## 12. ¿Qué dificultad se presentó durante la integración y cómo comprobaste que quedó resuelta?

Solo hubo un error no visto con uno de los servicios de piphy.service.ts, ya que el metodo de FindGifByID estaba incompleto, por lo que con el comando pnpm build pudo ser identificado y solucionado. También se inspeccionaron las solicitudes desde la pestaña Network del navegador para comprobar que se realizaban peticiones `GET` a GIPHY y que recibían un estado HTTP `200`. Finalmente, se ejecutó `pnpm build` para confirmar que el proyecto compilara sin errores.
