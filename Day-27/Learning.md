Understanding Frontend-Backend Communication & Setting Up the Backend

What I Learned

1. Understanding Frontend-Backend Communication
	•	The frontend (React, HTML, CSS, JavaScript) handles the user interface (UI) and user interactions.
	•	The backend (Node.js, Express, databases) manages data processing, authentication, and business logic.
	•	The frontend communicates with the backend using RESTful APIs, allowing seamless data exchange.

2. How the Frontend Requests Data from the Backend
	1.	User Action: A user performs an action on the frontend (e.g., clicking a button).
	2.	HTTP Request: The frontend sends a GET, POST, PUT, or DELETE request to the backend.
	3.	Backend Processing: The backend processes the request, retrieves or updates data, and prepares a response.
	4.	Data Response: The backend sends data (usually in JSON format) back to the frontend.
	5.	UI Update: The frontend updates the UI based on the response received.

3. Understanding RESTful APIs
	•	API (Application Programming Interface): A structured way for the frontend and backend to interact.
	•	HTTP Methods:
	•	GET → Retrieve data from the server.
	•	POST → Send new data to the server.
	•	PUT → Update existing data on the server.
	•	DELETE → Remove data from the server.
	•	JSON (JavaScript Object Notation): The most common format used for API responses.

4. Testing APIs Using Postman
	•	Postman is a tool to manually send API requests and inspect responses.
	•	It helps in debugging backend functionality before integrating with the frontend.

5. Setting Up a Backend with Node.js & Express
	•	Express.js is a lightweight Node.js framework for handling API requests efficiently.
	•	CORS (Cross-Origin Resource Sharing) is required when the frontend and backend are hosted on different domains.

6. The Role of CORS in Frontend-Backend Communication
	•	By default, browsers block frontend requests to a different domain due to security policies.
	•	CORS (Cross-Origin Resource Sharing) allows the backend to accept requests from different origins.
	•	This is essential for frontend applications that interact with a remote backend.

Reflection
	•	Understood the flow of data between frontend and backend.
	•	Practiced making API requests using fetch() and Postman.
	•	Setting up a backend with Express.js was straightforward and enables data management.
	•	Learned that CORS is crucial when connecting a frontend hosted on a different domain.
