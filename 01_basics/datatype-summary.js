// Primitive Type-
// 7-types: Strings, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// thus verfied eventhough id and anotherId seems same but it is not as Symbol will make the id unique

const bigNumber = 5351531151651656n


//Reference (Non-primitive)-
// Arrays, Objects, Functions

const heroes = ["shaktiman","nagraj","doga"];
let myObj = {
    name:"Saurabh",
    age: 25,
    nationality: "Indian"
}

const myfunction = function(){
    console.log("Hello World");
}

//typeof()- is use to find the datatype

//JavaScript is Dynamically Typed lang- means we dont define the type of value it hold while writing code it will auto detect the type while loading.

