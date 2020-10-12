# ⚙️ Un vistazo a CLIMEAPP 

El sistema consta de un sistema CRUD, _Create, Read, Update and Delete_ , osea que se pueden crear, leer, editar y eliminar ciudades con sus datos 
de clima, notaran al abrir una ciudad que el color de fondo cambia de acuerdo a la temperatura, frio, normal y caluroso.

[Ver proyecto montado en Heroku](https://climeapp-front.herokuapp.com/)

## 📋 Pasos para el desarrollo

* **Diseño/desarrollo de la UI** - *User interface* -
Por lo general suelo hacer una leve investigación de otros ejemplos similares al proyecto para usarlos de guia, en este caso al tratarse de un coding challenge me enfoque 
mucho mas en codigo y no la diseñe en Photoshop previamente.

* **Desarrollo del BackEnd** - *Backend development* -
Para este proyecto use nodejs con express, y mongoDB como base de datos, el codigo es bastante intuitivo, como herramienta para pruebas de peticiones HTTP use insomnia. y para
manejo de variables de entorno use la dependencia _dotenv_ , y para como ORM para la BD use la dependencia _mongoose_.

* **Desarrollo del FrontEnd** - *FrontEnd development* -
Para el Frontend use React, y decidi usar react-router para no poner todo en una sola pantalla, para las peticiones HTTP al server use la dependencia _axios_ y como pre-procesador
de CSS use SASS, para la cual use la dependecia _node-sass_ .

* **Deployment de la App** - *Deploy en heroku* -
Para hacer el deploy use heroku, y mongoDB atlas para la BD, el backend y el frontend estan en dos apps distintas de heroku, ambas usan variables de entorno, en el caso del frontend es para definir la url utilizadas en las _queries HTTP_. 

## 🛠️ Tecnologias usadas

* **HTML - CSS**
* **NodeJS** 
* **Express** 
* **Mongoose**
* **Nodemon**
* **Dotenv**
* **React**
* **Axios**
* **React-router**
* **Node-sass** 
* **Heroku**

## 📦 Instalación

* Primero que nada deberiamos instalar NodeJS, asumo que esta parte no es necesaria detallar, luego instalar MongoDB, una vez tengamos estos programas instalados, clona
el repositorio, en el mismo habran 2 carpetas, \backend\ y \frontend\ desde una consola CMD posicionarnos en la carpeta \backend\ y correr el siguiente comando:

```
npm install
```
* Esto instalara las dependencias necesarias para que el sistema pueda funcionar, luego repetir el proceso pero con la carpeta \frontend\, luego nos posicionamos en la carpeta
\backend\ y corremos el siguiente comando:

```
mongod
```

* Esto levantara nuestra BD, luego abrimos aparte otra CMD y posicionate en \backend\ y corre el comando:

```
npm run dev
```

* Esto levantara el server de express, ahora nuestro backend deberia estar listo, ahora abre otra CMD y dirigete a la carpeta \frontend\ y corre el siguiente comando:

```
npm start
```

* Esto comenzara a levantar nuestro frontend, se abrira en tu navegador predeterminado, un localhost con el sistema funcionando.
