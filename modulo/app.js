const http = require('http')

http.createServer(function(req,res){
    res.end("Ola nodeJS")
}).listen(8081)

console.log("Servidor funcionando!")


