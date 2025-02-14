Understanding the HTTP Module  

## *What I Learned*  

### *1. What is the HTTP Module?*  
- The *http* module in Node.js allows us to create a web server.  
- It listens for client requests and sends responses.  
- Common methods:  
  - http.createServer() → Creates an HTTP server.  
  - res.writeHead() → Sets the response header (e.g., status code, content type).  
  - res.end() → Sends the final response to the client.  


### *2. Creating a Basic HTTP Server*  
- A simple server responding with plain text:  

  javascript
  const http = require("http");

  const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, welcome to my Node.js server!");
  });

  server.listen(3000, () => console.log("Server running on port 3000"));

	•	Start the server using:

node server.js


	•	Open http://localhost:3000 in a browser.

3. Handling Multiple Routes
	•	The server can handle different routes based on the request URL:

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page: Learning Node.js!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));

4. Testing the Server
	•	Open a browser and test different routes:
	•	http://localhost:3000/ → Shows “Welcome to the Home Page!”
	•	http://localhost:3000/about → Shows “About Page: Learning Node.js!”
	•	http://localhost:3000/contact → Shows “404 - Page Not Found”
	•	Use Postman to test API responses.

Reflection
	•	The HTTP module allows us to create a basic server in Node.js.
	•	Handling different routes is essential for building web applications.
