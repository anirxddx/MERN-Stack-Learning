Day 14: DOM Manipulation Basics  

*What I Learned*  

*1. Understanding the DOM*  
- The *Document Object Model (DOM)* represents an HTML page as a structured tree.  
- JavaScript can interact with and modify the DOM to change webpage content dynamically.  

*2. Selecting Elements*  
- Used different methods to select elements:  
  - getElementById("id") → Selects an element by ID.  
  - getElementsByClassName("class") → Selects elements by class name.  
  - querySelector("selector") → Selects the first matching element.  
  - querySelectorAll("selector") → Selects all matching elements.  

- Example:  
  javascript
  let heading = document.getElementById("title");
  heading.textContent = "Updated Heading";

3. Modifying the DOM
	1.	Changing Content:

document.querySelector("#message").innerText = "Hello, JavaScript!";


	2.	Changing Styles:

document.querySelector("body").style.backgroundColor = "lightblue";


	3.	Adding Elements:

let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);

Reflection
	•	DOM manipulation allows dynamic updates to web pages without reloading.
	•	Practicing with different selectors improved my understanding of interacting with HTML elements.
