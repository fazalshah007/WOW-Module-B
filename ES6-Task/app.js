// ###############   Global Scope ###############

// Declare a variable using var outside of any function or block.
// ● Declare a variable using let outside of any function or block.
// ● Declare a variable using const outside of any function or block.
// ● Log all three variables to the console.
// ● Are they accessible globally?

var variable1 = "string"
let variable2 = "string"
const variable3 = "string"

console.log(variable1, variable2, variable3);

// ################## Function Scope #######################


// ● Create a function and declare a variable using var inside the
// function.
// ● Declare a variable using let inside the function.
// ● Declare a variable using const inside the function.
// ● Try to log all three variables to the console outside the function.
// ● What do you observe?



function func1(){
    var variable1 = "string"
}

function func2(){
    let variable2 = "string"
}

function func3(){
    var variable3 = "string"
}

console.log(variable1, variable2, variable3);


// ################  Block Scope:#########################?


// ● Use an if statement and declare a variable using var inside the
// block.
// ● Declare a variable using let inside the block.
// ● Declare a variable using const inside the block.
// ● Try to log all three variables to the console outside the block.
// ● What do you observe?


if(true){
     var variable1 = "string";
}

if(true){
       let variable2 = "string"
}

if(true){
       const variable3 = "string"
}

console.log(variable1, variable2, variable3);


// ####################### Hoisting with var: ####################### 


// ● Write code where you log a var variable before it is declared.
// ● What value do you get?

console.log(dummyVar);

var dummyVar = "data"

// ####################    Hoisting with let and const: ############################ 

// ● Write code where you log a let variable before it is declared.
// ● Write code where you log a const variable before it is declared.
// ● What kind of error do you get?

console.log(dummyVar2);

let dummyVar2 = "data"

console.log(dummyVar3);

let dummyVar3 = "data"


// ###################### Re-declaration: ###########################

// ● Try to declare the same variable name twice using var.
// ● Try to declare the same variable name twice using let.
// ● Try to declare the same variable name twice using const.
// ● What happens in each case?


var same = "same data";
let same = "same data";
const same = "same data";


// ########################  Re-assignment:  #############################

// ● Declare a variable using var and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using let and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using const and assign it a value. Then reassign it
// a new value.
// ● What happens in each case?

