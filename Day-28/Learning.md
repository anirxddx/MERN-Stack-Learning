Backend-Frontend Communication & Setting Up API Calls

What I Learned

1. Setting Up the Backend
	•	Node.js + Express.js is commonly used to create the backend.
	•	Express simplifies handling API requests and responses.
	•	The backend must have proper CORS (Cross-Origin Resource Sharing) settings to allow frontend communication.
	•	A backend server listens on a specific PORT and handles incoming requests.

2. Making API Calls from the Frontend
	•	The frontend communicates with the backend using tools like:
	•	Fetch API – A built-in JavaScript function for making API requests.
	•	Axios – A popular third-party library that simplifies API requests and error handling.
	•	API requests from the frontend must include:
	•	The API endpoint (URL) to send the request to.
	•	The HTTP method (GET, POST, etc.).
	•	(For POST/PUT) The data payload in JSON format.

3. Handling API Responses in the Frontend
	•	After making an API call, the frontend:
	1.	Waits for the backend response.
	2.	Parses the JSON data received.
	3.	Updates the UI based on the new data.
	•	Error handling is essential to manage issues like network failures, incorrect API responses, or CORS errors.

Reflection
	•	Understood how backend and frontend communicate via APIs.
	•	Learned the role of CORS in allowing API requests from the frontend.
	•	Explored different methods for making API requests from the frontend.
