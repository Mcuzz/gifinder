# Preguntas de cierre - EC1 F2 A3
## 1. ¿Qué significa refactorizar una aplicación?
Separar las responsabilidades pod modulos que se interconecten entre si para poder reutilizarlos y simplemente tener el codigo mas ordenado. 

## 2. ¿Por qué el proyecto se dividió en módulos?
Para poder reutilizar ciertas funciones de forma ms sencilla y para que no hubiesen clases tan largas. 

## 3. ¿Cuál es la responsabilidad de main.ts?
Es reunir las piezas que se han creado en la aplicacion para visualizarlo en una interfaz en donde estas mismas funciones se puedan emplear. 

## 4. ¿Qué diferencias existen entre una interfaz, un tipo unión y una enumeración?
Una interfaz define la forma y estructura de un dato u objeto, el tipo union permite que una variable guarde mas de un tipo de dato posible, y el enum define un grupo cerrado de constantes con nombre. 

## 5. ¿Para qué se utiliza import type?
Para emplear la estructura del tipo de objeto que necesitamos usar. 

## 6. ¿Dónde se aplicaron la desestructuración, spread y rest?
Desestructuracion para acomodar los tags dentro de un arreglo y el objeto en si pues ya era el gif con su nombre y datos. 
y el spread y el rest en general os ayudaron a extraer y organizar los datos de los arreglos de forma rapida. 

## 7. ¿Por qué searchGifs recibe la colección como parámetro?
Para buscar el gif solicitado dentro de la coleccion de gifs que se esta otrogando como parametro

## 8. ¿Por qué findGifById puede devolver undefined?
Porque puede que en alguna ocacion se aplique un ID que en realidad no existe. 

## 9. ¿Qué función cumple data-gif-id?
El poder ubicar a un gif en especifico con su numero se identificacion o ID. 

## 10. ¿Qué es la delegación de eventos?
Lo que nos permitio podner un unico listening para que un evento como el click de un boton controle los acontecimientos siguientes. 

## 11. ¿Por qué el estado Loading podría no observarse?
porque aun no hemos generado ninguna pantalla de carga. 

## 12. ¿Qué dificultad se presentó durante la refactorización y cómo se resolvió?
El detalle de que era un poco tedioso ver como se desplomaban un monton de errores en cla clase min mientras la "mordiamos" para quitarle el codigo que estabamos poniendo en otro lado aun sin conectarlo. 