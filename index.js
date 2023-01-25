const express = require("express"); // se vincula una variable a la dependenciua
const app = express();//Vinculación de la lectura por medio de express
const port = 3000; //Definición del puerto


//req son los elementos que se toman del usuario y res es la respuesta que se le da al ususario
// metodo .get el slach es para indicar que es la raiz
app.get("/", (req,res)=>{
  res.send("hola mundo"); // envia ino a pantalla
})

//Se vincula la app con el puerto mediante el metodo .listen
app.listen(port, ()=>{
  console.log("mi puerto es " + port)
})




