const arrays = [42, true, "Hello, World!", { name: "John", age: 25, isStudent: false, }, false, 3.14, "JavaScript is fun!",];

// Q No:1 Convert all elements to their string representation using map Method?

const str = arrays.map((element) => {

     return "String"

 })

console.log(str);


// Q No:2 Filter only number elements using filter Method?

const newArr = arrays.filter((element) => {

    return typeof element === "number";
})

console.log(newArr)


// Q No:3 Log each element's type to the console (does not return anything) using forEach Method?

arrays.forEach((element) => {

    console.log(typeof element);
})



// Q No:4 Sum up only the numbers in the array reduce Method ?

const sum = arrays.reduce((a, b) => {

    if (typeof b === "number") {

      return a + b;

    }

    return a;

  }, 0);
  
  console.log(sum)


// Q No:5 Find the first boolean value in an array using Find Method?


const findBooleanValue = arrays.find((element)=>{

    return typeof element === "boolean"

})

console.log(findBooleanValue);


// Q No:6 Find the index of the first object in an array using FindIndex Method?


const findIndexOfObject = arrays.findIndex((element)=>{

    return typeof element === "object"
})

console.log(findIndexOfObject);


// Q No:7 Check if the array contains any numbers in an array using some method?


const findAnyNumber = arrays.some((element) => {
     
    return typeof element === "number"

});
console.log(findAnyNumber)


// Q No:8 Check if all elements are of type 'string' in an array using every method?


const checkIfEveryString = arrays.every((element) =>{

    return typeof element == "string"
})

console.log(checkIfEveryString)