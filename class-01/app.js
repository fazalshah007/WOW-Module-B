// Q1: Write a program in which you have to create your own biodata details are: your name, email, city,
// education, occupation, phone number, institute name etc. Using template literals and variable using let
// and const and final output is shown in document.write() same as in below:

const biodata = {
    name:"Fazal Shah",
    age : 24,
    occupation: "Software developer",
    email : "fazal.shah@gmail.com",
    phone : "0300-1234567",
    instituteName : "Jawan Pakistan",
    education : "intermediate"
}

document.write(
    `<div style="width:50%; margin: 0 auto; font-size: 24px;">
    <p>Name : ${biodata.name}</p>
    <p>Age : ${biodata.age}</p>
    <p>Occupation : ${biodata.occupation}</p>
    <p>Email : <a href="#">${biodata.email}</a></p>
    <p>Phone : ${biodata.phone}</p>
    <p>Institute Name : ${biodata.instituteName}</p>
    <p>Education : ${biodata.education}</p>
    </div>
    `
)


// global scope var 

var a = 5;

{
    var a = 10;
}

console.log(a);

// local scope let & const 
// -----------------------------------------------/
let b = 10;
{
   let b = 20;
}
console.log(b);

const c = 10;
{
   const c = 20;
}
console.log(c)
// ---------------------------------------------------/

// function scope/
// ------------------------------------------------------------
sums()

function sums(){
    console.log("hello");
    
}
// ----------------------------------------------------------------------------------------------

// Hoisting var and function 

console.log(ab);

var ab =  5;

// ----------------------------------------------------------


// let d = "assign"
// let d = "reissign"


