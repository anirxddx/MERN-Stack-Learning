Day 11: Problem-Solving Practice  

*What I Learned*  

*1. Problem-Solving with Variables, Loops, and Functions*  
- Practiced applying variables, loops, and functions together to solve real-world problems.  
- Focused on writing clean and modular code to handle different scenarios.  

 *2. Problems Solved*  

1. *Reverse a String*  
   - Used a loop to reverse the characters in a string.  
   - Example (Python):  
     python
     def reverse_string(s):
         return s[::-1]

     print(reverse_string("Aniruddh"))  # Output: hddurinA
       

2. *Sum of an Array*  
   - Calculated the total sum of numbers in a list using a loop.  
   - Example (JavaScript):  
     javascript
     function arraySum(arr) {
         let total = 0;
         for (let num of arr) {
             total += num;
         }
         return total;
     }

     console.log(arraySum([1, 2, 3, 4]));  // Output: 10
       

3. *Largest Number in a List*  
   - Found the maximum value in a list using a loop.  
   - Example (Python):  
     python
     def find_max(lst):
         max_value = lst[0]
         for num in lst:
             if num > max_value:
                 max_value = num
         return max_value

     print(find_max([3, 1, 4, 1, 5, 9]))  # Output: 9
       

4. *Factorial of a Number*  
   - Used a function with a loop to calculate the factorial of a number.  
   - Example (JavaScript):  
     javascript
     function factorial(n) {
         let result = 1;
         for (let i = 1; i <= n; i++) {
             result *= i;
         }
         return result;
     }

     console.log(factorial(5));  // Output: 120
       

*Reflection*  
- Practicing problems helped me strengthen my understanding of combining concepts.  
- Debugging edge cases (e.g., empty lists) improved my attention to detail.  
