PartidazoApp
================================================================================

Based on

* [IBM Bluemix](https://www.ibm.com/blogs/bluemix/2017/06/react-web-express-api-development-production/)
* https://github.com/IBM-Cloud/logistics-wizard-webui
* https://console.bluemix.net/docs/services/ComposeForMongoDB/connecting-external.html#node-js-native
* https://en.wikipedia.org/wiki/React_(JavaScript_library)
* https://reactjs.org/tutorial/tutorial.html#what-is-react
* https://github.com/IBM-Cloud/node-helloworld
* https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50


Stack:

* MongoDB
* Express
* React
* Node

# Requires

* Cloud Foundry App on IBM Bluemix
* MongoDB on IBM bluemix
* npm i axios express body-parser foreman nodemon marked mongoose --save


# まとめる
La cosa é así.

Una base de datos NoSQL de alta performance es más que positivo:  MongoDB  

Un esquema de desarrollo con un buen framework para hacer ricas aplicaciones web, muy interactivas es buenísimo: React

Una capa intermedia de Microservices super powerfull también es positivo: Express

Todo en NodeJS es un golazo.

Express normalmente arranca con un script donde se definen los endpoints y los diferentes servicios que están disponibles.

```
app.listen(port, function() {
 console.log('api running');
});
```
React, por otro lado, arma un servidor de node para HTTP compilando el codigo en JSX y dejandolo en la carpeta build.

La idea acá es que dentro del propio proyecto de Express, hay un proyecto embebido de React (ui-react).

Luego desde el server.js de Express se levanta un endpoint que justamente ejecuta el proyecto compilado de React.

```
app.use(express.static(`${__dirname}/ui-react/build`));
```

El proyecto de React se compila con '''npm run-script build'''
y una vez compilado se puede ejecutar con

 nodemon server.js
