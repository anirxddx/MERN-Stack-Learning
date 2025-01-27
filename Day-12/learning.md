Introduction to JavaScript and ES6 Basics  

*What I Learned*  

*1. Role of JavaScript*  
- JavaScript adds interactivity and dynamic behavior to websites.  
- Runs in the browser to handle tasks like updating content, validating forms, and handling user interactions.  

*2. Variables in JavaScript*  
- **var vs let vs const:**  
  - **var:** Function-scoped, can be redeclared.  
  - **let:** Block-scoped, cannot be redeclared but can be updated.  
  - **const:** Block-scoped, cannot be updated or redeclared.  

- Example:  
  ```javascript
  let name = "Aniruddh";
  const age = 25;
  console.log(My name is ${name} and I am ${age} years old.);
  // Output: My name is Aniruddh and I am 25 years old.

3. ES6 Features
	1.	Arrow Functions:
	•	Concise syntax for writing functions.
	•	Example:

const greet = (name) => Hello, ${name}!;
console.log(greet("Aniruddh"));  // Output: Hello, Aniruddh!


	2.	Template Literals:
	•	Use backticks (`) for string interpolation.
	•	Example:

const product = "Laptop";
const price = 599;
console.log(The ${product} costs $${price}.);
// Output: The Laptop costs $599.

Hands-On Practice
	1.	String Concatenation:

const firstName = "Aniruddh";
const lastName = "Singh";
console.log(firstName + " " + lastName);  // Output: Aniruddh Singh


	2.	Basic Arithmetic:

const a = 5, b = 7;
console.log(a + b);  // Output: 12
console.log(a * b);  // Output: 35
