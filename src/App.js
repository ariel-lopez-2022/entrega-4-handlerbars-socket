
const express = require('express');
const socketIo = require('socket.io');
const handlebars = require('express-handlebars');
const productsRoute = require('./routes/products.routes');
const cardsRoute = require ('./routes/carts.routes')
const viewRoute = require('./routes/views.route')
const server = express();


const httpServer = server.listen(8080, ()=> {
    console.log('Servidor Listo en puerto 8080')
    
})

//handlerbars
server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');
//express
server.use(express.static(__dirname+'/public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))
//rutas
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/", viewRoute);

// socket
const io = socketIo(httpServer);

io.on ('connection',(sokets)=>{
    console.log("Nuevo Clinte conectado")
})  




/*
<h5 class="card-title">{{name}}</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>*/