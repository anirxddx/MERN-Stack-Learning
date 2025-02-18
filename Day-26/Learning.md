## *What I Learned*  
- The *frontend (React, HTML, JavaScript)* communicates with the *backend (Node.js, Express)* via *APIs*.  
- APIs use *HTTP requests* (GET, POST, PUT, DELETE) to send and receive data.  
- RESTful APIs follow standard conventions for structured responses.  

## *1. Understanding RESTful APIs*  
### *HTTP Methods*  
- *GET* → Retrieve data from the server.  
- *POST* → Send data to the server.  
- *PUT* → Update existing data.  
- *DELETE* → Remove data from the server.  

### *Example API Response Format (JSON)*  
json
{
  "message": "Welcome to the API",
  "status": "success"
}

2. Making an API Call Using JavaScript (fetch())

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

Reflection
	•	Learned the role of RESTful APIs in full-stack development.
