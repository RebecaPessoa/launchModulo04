const express = require('express') 
const nunjucks = require('nunjucks') 
const routes = require("./routes")

const server = express() 

server.use(express.static('public'))
server.use(routes) //chamado middleware

server.set("view engine", "njk") 

nunjucks.configure("views", {
    express:server,
    autoescape: false, //evita que apareça injeção de html
    noCache: true,
    //watch: true
})



server.listen(5000, function(){ 
    console.log("server is running")
})