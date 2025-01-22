Day 9: Combining Variables, Loops, and Functions  

*What I Learned*  

*1. Integrating Variables, Loops, and Functions*  
- *Variables:* Store and manipulate data for calculations.  
- *Loops:* Automate repetitive tasks within functions.  
- *Functions:* Encapsulate logic for reuse and organization.  

*2. Solving Real-World Problems*  
1. *Factorial of a Number:*  
   - Example (Python):  
     python
     def factorial(n):
         result = 1
         for i in range(1, n + 1):
             result *= i
         return result

     print(factorial(5))  # Output: 120
       

2. *Check Prime Number:*  
   - Example (JavaScript):  
     javascript
     function isPrime(num) {
         if (num < 2) return false;
         for (let i = 2; i <= Math.sqrt(num); i++) {
             if (num % i === 0) return false;
         }
         return true;
     }

     console.log(isPrime(7)); // Output: true
       

3. *Fibonacci Sequence:*  
   - Example (Python):  
     python
     def fibonacci(n):
         sequence = [0, 1]
         for i in range(2, n):
             sequence.append(sequence[-1] + sequence[-2])
         return sequence

     print(fibonacci(7))  # Output: [0, 1, 1, 2, 3, 5, 8]
       

*Reflection*  
- Combining variables, loops, and functions made solving problems more efficient.  
- Debugging Fibonacci logic reinforced the importance of clear step-by-step approaches.  
