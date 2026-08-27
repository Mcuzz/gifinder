# Preguntas de cierre - EC1 F1 A1

## ¿Qué función cumple Node.js en el entorno de desarrollo de una aplicación frontend?
Es el motor de base que ejecuta mis herramientas de desarrollo, comp el local server de vite y pnpm

## 2. ¿Qué es PNPM y qué responsabilidad tiene dentro del proyecto? 
es el gestor de paquetes que instala las librerias, organiza almacenamiento y versiones y que sirve para ejecutar comandos.

## 3. ¿Qué problema resuelve Vite durante el desarrollo?
Tal vez el arranque lento del servidor local, ya que refleja los cambios en el codigo durante el desarrollo. 

## 4. ¿Por qué se seleccionó la plantilla Vanilla con TypeScript?
Para construir el frontend con js puro, sin un framework pesado

## 5. ¿Cuál es la diferencia entre pnpm install, pnpm dev y pnpm build?
pnpm install: descarga las dependencias y librerias anotadas en el archivo.

pnpm dev: activa el servidor local de vite, lee la plantilla con ts y lo pone en el navegador.

pnpm build: traduce el codigo, compila y genera la carpeta fisica con archivos html, js y css para que se suban a cualquier servidor web.

## 6. ¿Qué información contiene package.json?
Tiene los metadatos del proyecto y los scripts de automatizacion, dependencias y configuracion de entorno

## 7. ¿Por qué debe conservarse pnpm-lock.yaml en el repositorio?
porque ayuda a que los desarrolladores y servidores de despliegue descarguen las mismas versiones de las librerias

## 8. ¿Por qué node_modules no debe subirse a GitHub?
porque contiene archivos pesados que se pueden regenerar automaticamente con un solo comando en otros dispositivos

## 9. ¿Cuál es la función de main.ts?
es el primer archivo que arranca  y centraliza los recursos, cordinando los modulos y funciones o componentes de ts que componen el frontend

## 10. ¿Qué ventaja ofrece separar el código en components, models, services, styles y utils?
Todos los modulos tienen una responsabilidad unica, lo que lo hace mas facil de entender, mantenible y escalable

## 11. ¿Qué diferencia existe entre el código fuente almacenado en src y los archivos generados en dist?
Que el src tiene el codigo fuente que yo hice, mientras que el dist ya es el codigo optimizado en JS puro, directo para ir al navegador web tras escribir el comando pnpm build

## 12. ¿Qué error o dificultad encontraste durante la configuración y cómo lo resolviste?
Ninguno, ya haciendolo en mi casa. Durante mi estancia en la escuela la red no me dejaba correr pnpm install, pero despues todo fluyo correctamente tal como en la guia de la actividad.
## 13. ¿Cómo comprobaste que el repositorio puede ejecutarse en otro equipo?
Si, es correcto, se pudo clonar de forma exitosa. 

## 14. ¿Qué aprendizaje de esta actividad será necesario para continuar desarrollando GIFinder? 
Arquitectura modular para conectar el api externa sin romper la interfaz 