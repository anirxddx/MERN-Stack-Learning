const http = require("http")
const fs = require("fs")
const myServer = http.createServer( (req, res) => {
    res.writeHead(200, { "content-type" : "text/html"})
    fs.readFile("index.html", function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write("error : file not found")
    }
    else{
        res.write(data)
    }
    res.end()
    console.log("Server Fetched Data");
    })
    
});
myServer.listen(3000, () => console.log("Server Started"));