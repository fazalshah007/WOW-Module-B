// ###############   Global Scope ###############

// // Declare a variable using var outside of any function or block.
// // ● Declare a variable using let outside of any function or block.
// // ● Declare a variable using const outside of any function or block.
// // ● Log all three variables to the console.
// // ● Are they accessible globally?

// var variable1 = "string"
// let variable2 = "string"
// const variable3 = "string"

// console.log(variable1, variable2, variable3);

//  ################## Function Scope #######################


// // ● Create a function and declare a variable using var inside the
// // function.
// // ● Declare a variable using let inside the function.
// // ● Declare a variable using const inside the function.
// // ● Try to log all three variables to the console outside the function.
// // ● What do you observe?



// function func1(){
//     var variable1 = "string"
// }

// function func2(){
//     let variable2 = "string"
// }

// function func3(){
//     var variable3 = "string"
// }

// console.log(variable1, variable2, variable3);


//  ################  Block Scope:#########################?


// // ● Use an if statement and declare a variable using var inside the
// // block.
// // ● Declare a variable using let inside the block.
// // ● Declare a variable using const inside the block.
// // ● Try to log all three variables to the console outside the block.
// // ● What do you observe?


// if(true){
//      var variable1 = "string";
// }

// if(true){
//        let variable2 = "string"
// }

// if(true){
//        const variable3 = "string"
// }

// console.log(variable1, variable2, variable3);


// ####################### Hoisting with var: ####################### 


// // ● Write code where you log a var variable before it is declared.
// // ● What value do you get?

// console.log(dummyVar);

// var dummyVar = "data"

//  ####################    Hoisting with let and const: ############################ 

// // ● Write code where you log a let variable before it is declared.
// // ● Write code where you log a const variable before it is declared.
// // ● What kind of error do you get?

// console.log(dummyVar2);

// let dummyVar2 = "data"

// console.log(dummyVar3);

// let dummyVar3 = "data"


// ###################### Re-declaration: ###########################

// // ● Try to declare the same variable name twice using var.
// // ● Try to declare the same variable name twice using let.
// // ● Try to declare the same variable name twice using const.
// // ● What happens in each case?


// var same = "same data";
// let same = "same data";
// const same = "same data";


// ########################  Re-assignment:  #############################

// // ● Declare a variable using var and assign it a value. Then reassign it a
// // new value.
// // ● Declare a variable using let and assign it a value. Then reassign it a
// // new value.
// // ● Declare a variable using const and assign it a value. Then reassign it
// // a new value.
// // ● What happens in each case?

// var a = "hello"
// a = 50

// let b = "hello"
// b = 50

// const c = "world"
// c = 60

// console.log(a,b,c);

// ##########################  Temporal Dead Zone (TDZ): #######################

// // ● Declare a let variable inside a block but try to log it before the
// // declaration.
// // ● Declare a const variable inside a block but try to log it before the
// // declaration.
// // ● What error do you get? Why?

// console.log(blockInside);

// {
//     let blockInside = "block inside"
// }

// console.log(blockInsideWithConst);

// {
//     const blockInsideWithConst = "block inside"
// }


//  ###################  When to use var, let, and const: ##################

// ● Write a piece of code to demonstrate a good use case for var.
// ● Write a piece of code to demonstrate a good use case for let.
// ● Write a piece of code to demonstrate a good use case for const.

// function legacyExample() {
//     if (true) {
//       var message = "This variable is function-scoped.";
//     }
//     console.log(message); // Accessible due to function scope
//   }
  
//   legacyExample();
  

// function blockScopeExample() {
//     for (let i = 0; i < 5; i++) {
//       console.log("Inside loop:", i); // `i` is block-scoped
//     }
//     // console.log(i); // Uncommenting this would throw a ReferenceError
//   }
  
//   blockScopeExample();
  

// function constExample() {
//     const PI = 3.14159; // Define a constant
//     console.log("Value of PI:", PI);
  
//     // PI = 3.14; // Uncommenting this would throw a TypeError
//   }
  
//   constExample();
  

// ###################  String Interpolation:  ##################

// ● Create variables for a person's first name and last name.
// ● Use a template literal to create a full name string and log it to the
// console.

// const firstName = "fazal"
// const lastName = "shah"
// const fullName = `hi, ${firstName} ${lastName}`
// console.log(fullName);


// ###################  Multi-line Strings:  ##################

// ● Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.


// const multiLineString = `
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione laborum tempore veritatis, incidunt facilis culpa amet perferendis quibusdam consequuntur molestias necessitatibus modi architecto minima adipisci nam debitis vel recusandae sunt soluta officia qui natus quis. Aspernatur labore ab aliquid ullam, quidem ipsa doloribus quis tenetur repudiandae tempore error libero!
// `

// console.log(multiLineString);


// ###################  Simple Expressions:  ##################

// ● Create variables for two numbers.
// ● Use a template literal to create a string that includes the sum of the
// numbers.
// ● Log the string to the console.


// const num1 = 5;
// const num2 = 10;
// const sum = `the total of sum is ${num1 + num2}`
// console.log(sum);


// ###################  Function Calls:  ##################

// ● Create a function that takes two numbers and returns their product.
// ● Use a template literal to call this function inside a string and log the
// result to the console.


// function multiplyNumbers(a, b) {
//     return a * b;
//   }

//   const num1 = 5;
//   const num2 = 7;
//   const val = `The product of ${num1} and ${num2} is ${multiplyNumbers(num1, num2)}.`
//   console.log(val);
  
  

// ###################  Formatting:  ##################

// ● Write a tag function that formats a string by making it uppercase.
// ● Use this tag function with a template literal and log the result.

// function uppercase(strings, ...values) {
//   console.log(strings, values);
  
//     return strings
//       .map((str, i) => str + (values[i] || ''))
//       .join('')
//       .toUpperCase();
//   }

//   const name = "fazal";
//   const activity = "coding & gaming";
//   const result = uppercase`Hello, ${name}! Are you enjoying ${activity}?`;
  
//   console.log(result);
  


// ###################  Conditional Logic:  ##################

// ● Create a variable for the current hour.
// ● Use a template literal to display a different message depending on
// whether it's morning (before 12 PM) or afternoon (after 12 PM).

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
//   const timeFormat = formatAMPM(new Date)

// const currentHour = new Date().getHours();


// const message = `
// Good ${currentHour < 12 ? `Morning ${timeFormat}` : currentHour < 15 ? `Afternoon ${timeFormat}` : currentHour < 19 ? `Evening ${timeFormat}` : `Night ${timeFormat}`}
// `;

// console.log(message);



// ###################  Nested Template Literals:  ##################


// ● Create nested template literals to build a more complex string, such as
// a nested HTML structure (e.g., a table with rows and cells).
// ● Log the result to the console.

// const table = `
//              <table style="width: 50%; margin: 0 auto; border-collapse: collapse; border: 1px solid black;">
//         <tr>
//             <th style="padding:5px; text-align:center; border: 1px solid black;">Name</th>
//             <th style="padding:5px; text-align:center; border: 1px solid black;">Age</th>
//             <th style="padding:5px; text-align:center; border: 1px solid black;">Email</th>
//             <th style="padding:5px; text-align:center; border: 1px solid black;">Status</th>
//         </tr>
//         <tr>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">Fazal</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">24</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">fazal@gmail.com</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">false</td>
//         </tr>
//         <tr>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">Fazal</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">24</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">fazal@gmail.com</td>
//             <td style="padding:5px; text-align:center; border: 1px solid black;">false</td>
//         </tr>
//     </table>
// `
// document.querySelector("body").innerHTML = table


// ###################  Simple Condition:  ##################


// ● Create a variable age.
// ● Use the ternary operator to assign a variable canVote the value
// "Yes" if age is 18 or older, and "No" otherwise.
// ● Log canVote to the console.


// const age = 18;

// const canVote = age >= 18 ? "Yes" : "No" 
// console.log(canVote);



// ###################  Even or Odd:  ##################

// ● Create a variable number.
// ● Use the ternary operator to assign a variable evenOrOdd the value
// "Even" if number is even, and "Odd" if it's odd.
// ● Log evenOrOdd to the console.


// const number = 2;

// const evenOrOdd = number % 2 == 0 ? "Even" : "Odd"

// console.log(evenOrOdd);


//  ###################  Grade Evaluation:  ##################

// Create a variable score.
// Use the ternary operator to assign a variable grade based on the following conditions:
// ● "A" if score is 90 or above.
// ● "B" if score is 80 or above.
// ● "C" if score is 70 or above.
// ● "D" if score is 60 or above.
// ● "F" otherwise.
// Log grade to the console.


// const score = 96;

// let grade = score >= 90 && score <= 100 ? "A+" : 
//             score >= 80 && score <= 89  ? "A"  :
//             score >= 70 && score <= 79  ? "B"  :
//             score >= 60 && score <= 69  ? "C"  :
//             score >= 50 && score <= 59  ? "D"  :
//             score >= 34 && score <= 49  ? "Pass"  :
//             score >= 0 && score <= 39  ? "Fail"  : "Invalid Percantage!"

// console.log(grade);


// ###################  Login Status:  ##################

// ● Create a variable isLoggedIn.
// ● Use the ternary operator and logical operators to assign a variable
// statusMessage the value "Welcome back!" if isLoggedIn is true,
// and "Please log in" if isLoggedIn is false.
// ● Log statusMessage to the console.


// const isLoggedIn = true;

// const statusMessage = isLoggedIn ? "welcome back" : "please log in"

// console.log(statusMessage);


// ###################  Discount Eligibility:  ##################

// ● Create variables isMember and purchaseAmount.
// ● Use the ternary operator and logical operators to assign a variable
// discount the value 10% of purchaseAmount if isMember is true
// and purchaseAmount is greater than 100, and 0 otherwise.
// ● Log discount to the console.


// let isMember = true; 
// let purchaseAmount = 1500; 

// let discount = (isMember && purchaseAmount > 100) ? 0.1 * purchaseAmount : 0;

// console.log(`Discount: ${discount.toFixed(2)}`);


// ###################  Mapping Values:  ##################

// ● Create an array of numbers.
// ● Use the map method with a ternary operator to create a new array
// where each number is doubled if it is even and tripled if it is odd.
// ● Log the new array to the console.

// const arr = [2,4,6,1,3,5,7,8,9,10,11,15,16,18];

// const newArr = arr.map((element) =>{
//     return element % 2 == 0 ? "Even" : "Odd"
// })

// console.log(newArr);


// ###################  Filtering Values:  ##################


// ● Create an array of strings.
// ● Use the filter method with a ternary operator to create a new array
// that only includes strings with a length greater than 3.
// ● Log the new array to the console.


// const str = ["pop", "dude", "apple", "banana", "gap", "shape", "rat", "mango", "hot"]

// const newStr = str.filter((element)=>{
//     return element.length === 3
// })
// console.log(newStr);


// ###################  Copying an Array:  ##################


// ● Create an array originalArray with some elements.
// ● Use the spread operator to create a copy of originalArray called
// copiedArray.
// ● Log both arrays to the console to verify they are the same but not the
// same reference.

// const originalArray = [true,"hello",24,[1,2,3],{name:"fazal",age:24}]

// const copiedArray = [...originalArray]

// console.log(copiedArray);


// ###################  Merging Arrays:  ##################

// ● Create two arrays array1 and array2.
// ● Use the spread operator to create a new array mergedArray that
// combines the elements of array1 and array2.
// ● Log mergedArray to the console.


// const arr1 = [1,2,3,4,5,6,7,8,9,10];

// const arr2 = [11,12,13,14,15,16,17,18,19,20];

// const mergedArray = [...arr1, ...arr2]

// console.log(mergedArray);


// ###################  Adding Elements to an Array:  ##################

// ● Create an array numbers with some elements.
// ● Use the spread operator to add a new element at the beginning and at
// the end of the numbers array.
// ● Log the updated array to the console.


// const numbers = [1,2,3,4,5,6]

// const newNumbers = [...numbers, 7,8,9,10]

// console.log(newNumbers);


// ###################  Copying an Object:  ##################

// ● Create an object originalObject with some key-value pairs.
// ● Use the spread operator to create a copy of originalObject called
// copiedObject.
// ● Log both objects to the console to verify they are the same but not the
// same reference.

// const originalObject = {
//     name:"Fazal",
//     age : 24
// }

// const copiedObject = {...originalObject}

// console.log(originalObject, copiedObject);

// ###################  Updating Object Properties:  ##################


// ● Create an object user with properties name, age, and email.
// ● Use the spread operator to create a new object updatedUser that
// updates the email property and adds a new address property.
// ● Log the updatedUser object to the console.


// const user = {name: "fazal", age:24, email: "fazal@gmail.com"}

// const updatedUser = {...user}

// updatedUser.email = "hamza@gmail.com"
// updatedUser.adress = "streat 6"

// console.log(user, updatedUser);


// ###################  Rest Parameter with Spread Operator:  ##################


// ● Create a function multiply that takes a number and any number of
// additional arguments.
// ● Use the rest parameter to gather the additional arguments into an
// array and multiply each by the first argument.
// ● Return an array of the results.
// ● Call the function with appropriate arguments and log the result.


// function multiply(...arr){
//     arr.forEach((elem) => {

//         console.log(elem * elem);
            
//     })
// }

// multiply(1,2,3,4,5,6)

