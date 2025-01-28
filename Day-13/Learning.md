Day 13: Arrays, Objects, and Loops  

*What I Learned*  

*1. Arrays*  
- Arrays are used to store multiple values in a single variable.  
- Common methods:  
  - push(): Adds an element to the end.  
  - pop(): Removes the last element.  
  - shift(): Removes the first element.  
  - slice(): Extracts a section of an array.  

- Example:  
  javascript
  let numbers = [1, 2, 3, 4];
  numbers.push(5); // [1, 2, 3, 4, 5]
  numbers.pop();   // [1, 2, 3, 4]
  console.log(numbers);

2. Objects
	•	Objects store data in key-value pairs.
	•	Example:

let person = {
    name: "Aniruddh",
    age: 25,
    city: "Delhi"
};
console.log(person.name);  // Output: Aniruddh
person.age = 26;
console.log(person.age);   // Output: 26

3. Loops
	1.	For Loop: Iterate a fixed number of times.

for (let i = 0; i < 5; i++) {
    console.log(i);
}


	2.	For…Of Loop: Iterate over array elements.

let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}


	3.	While Loop: Execute while a condition is true.

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

Hands-On Practice
	1.	Sum of Array Elements:

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum);  // Output: 15

Reflection
	•	Arrays and objects are fundamental for handling and organizing data.
	•	Practicing loops helped me understand how to process data efficiently.
