Day 10: Combining Variables, Loops, and Functions  

*What I Learned*  

*1. Using Variables, Loops, and Functions Together*  
- *Variables:* Store data for use within loops and functions.  
- *Loops:* Perform repetitive tasks efficiently.  
- *Functions:* Organize logic and make the code reusable.  

*2. Practical Examples*  
1. *Factorial Calculation:*  
   - Using a function and a loop to calculate the factorial of a number:  
     python
     def factorial(n):
         result = 1
         for i in range(1, n + 1):
             result *= i
         return result

     print(factorial(5))  # Output: 120
       

2. *Prime Number Check:*  
   - A function to determine if a number is prime using a loop:  
     javascript
     function isPrime(num) {
         if (num < 2) return false;
         for (let i = 2; i <= Math.sqrt(num); i++) {
             if (num % i === 0) return false;
         }
         return true;
     }

     console.log(isPrime(11));  // Output: true
       

3. *Fibonacci Series:*  
   - Generate the Fibonacci sequence using a function and a loop:  
     python
     def fibonacci(n):
         sequence = [0, 1]
         for i in range(2, n):
             sequence.append(sequence[-1] + sequence[-2])
         return sequence

     print(fibonacci(7))  # Output: [0, 1, 1, 2, 3, 5, 8]
       

*Reflection*  
- Combining variables, loops, and functions made solving problems simpler and more structured.  
- Debugging logic in examples like Fibonacci helped me understand the importance of clear steps.
