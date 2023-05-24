const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.send("Minha primeira rota")
})

app.get("/blog", function(req,res){
    res.send("Meu blog")
})

app.listen(8081, function(){
    console.log("Servidor com express funcionando!")
})

