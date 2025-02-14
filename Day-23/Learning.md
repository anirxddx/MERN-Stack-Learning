 Handling Requests & Responses in Node.js  

## *What I Learned*  

### *1. Serving HTML Files with Node.js*  
- Instead of sending plain text, we can serve actual HTML pages using the *fs* (File System) module.  
- The fs.readFile() method reads an HTML file and sends it as a response.  

#### *Example: Serving an HTML File*
javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));

	•	The server will read index.html and serve it when visiting http://localhost:3000/.

2. Handling JSON Responses
	•	Node.js can also return JSON data, making it useful for APIs.

3. Handling 404 Errors
	•	If a user tries to access an unknown route, we send a 404 Not Found response.


Reflection
	•	Learned how to serve HTML pages using Node.js.
	•	Successfully implemented JSON APIs for structured responses.
	•	Handling 404 errors ensures better user experience.
