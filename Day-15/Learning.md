
Day 15: Event Handling in JavaScript  

*What I Learned*  

*1. What is Event Handling?*  
- Event handling allows JavaScript to respond to user interactions like clicks, keypresses, and mouse movements.  
- Events are triggered when the user interacts with elements on a webpage.  

*2. Common Event Types*  
- click → Triggered when an element is clicked.  
- mouseover → Fires when the mouse hovers over an element.  
- keydown → Detects when a key is pressed.  
- input → Fires when a user types into an input field.  


*3. Adding Event Listeners*  
1. **Using addEventListener() (Preferred Method):**  
   javascript
   document.getElementById("btn").addEventListener("click", function() {
       alert("Button Clicked!");
   });

	2.	Inline Event Handling (Not Recommended):

<button onclick="alert('Clicked!')">Click Me</button>


	3.	Removing an Event Listener:

function sayHello() {
    console.log("Hello!");
}

let btn = document.getElementById("btn");
btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);

Reflection
	•	Event handling is essential for making web pages interactive.
	•	Using addEventListener() makes it easy to add multiple event handlers.
