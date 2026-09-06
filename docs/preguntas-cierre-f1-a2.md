# Preguntas de cierre - EC1 F1 A2

**Nombre:** Natalia  
**Grupo:** 001

## 1. ¿Qué problema resuelve la interfaz Gif dentro del proyecto?

Define la estructura que debe de tener cada gif, con atrubutos como su titulo, etiquetas, url, clasificacion, etc. 

## 2. ¿Qué diferencia existe entre una interfaz y un objeto literal?

Que la interfaz define la estructura y los tipor que debe de cumplir un objeto, el objeto literal solo contiene datos reales que se almacenan. 

## 3. ¿Qué significa Gif[] y qué error evita en el arreglo local?

Significa que el arreglo solo puede tener objetos que cumplan con la interfaz Gif, evitando agregar cosas con propiedades faltantes o tipos incorrectos.

## 4. ¿Por qué username y description pueden declararse como propiedades opcionales?

Porque algunos gif pueden no tener autor o descripcion, usamos ? para que no haya problema si no las
## 5. ¿En qué situación utilizarías let en lugar de const dentro de esta actividad?

cuando necesitara reasignar el valor de una variable. En cambio, uso const cuando la referencia no necesita cambiar.

## 6. ¿Qué reciben y qué devuelven normalizeText, searchGifs y createGifCard?

normalizeText recibe un texto y devuelve un string normalizado.
searchGifs recibe una colección de GIFs y un texto, y devuelve un arreglo de GIFs que coinciden.
createGifCard recibe un GIF y devuelve un string con el HTML de su tarjeta.

## 7. ¿Qué diferencia existe entre forEach, filter, map y find?

forEach ejecuta una acción sobre cada elemento.
filter devuelve los elementos que cumplen una condición.
map transforma cada elemento y crea un nuevo arreglo.
find devuelve el primer elemento que cumple una condición.

## 8. ¿Por qué find puede devolver undefined y cómo se controló ese resultado?

Porque puede no existir ningún elemento que cumpla la condición. Se controló utilizando ?. y ?? para proporcionar un valor alternativo.

## 9. ¿Qué es un callback? Identifica dos callbacks presentes en tu solución.
Un callback es una función que se pasa como argumento a otra función. En mi solución aparecen, por ejemplo, (gif) => matchesQuery(gif, query) en filter y (tag) => \#${tag}`enmap`.

## 10. ¿Qué ventaja ofrecen las template strings al construir las tarjetas?

Permiten construir el HTML de las tarjetas de manera más sencilla, insertando directamente los valores de las propiedades del GIF mediante ${...}.

## 11. ¿Para qué se utilizó la destructuración y el valor predeterminado de username?

La destructuración permite extraer las propiedades del objeto gif de forma más clara. El valor predeterminado de username permite mostrar "Autor no disponible" cuando el GIF no tiene autor.

## 12. ¿Por qué querySelector puede devolver null y cómo se validaron los elementos?

Porque el elemento buscado podría no existir en el DOM. Se validaron los elementos con condiciones if antes de utilizarlos.

## 13. ¿Qué función cumple preventDefault en el envío del formulario?

Evita que el formulario recargue la página y permite realizar la búsqueda mediante TypeScript sin abandonar la página actual.

## 14. ¿Cómo responde la aplicación cuando la búsqueda no obtiene coincidencias?

Muestra un contador de cero resultados y un mensaje indicando que no se encontraron GIFs y que se pruebe con otra palabra.

## 15. ¿Qué cambiará cuando el arreglo local sea sustituido por datos de Giphy API?

Los GIFs dejarán de estar definidos directamente en el arreglo local y deberán obtenerse y validarse a partir de los datos proporcionados por la API.

## 16. ¿Qué error o dificultad encontraste y cómo comprobaste que quedó resuelto?

Encontré un error relacionado con que status podía ser null. Lo solucioné validando correctamente los elementos del DOM antes de utilizarlos.