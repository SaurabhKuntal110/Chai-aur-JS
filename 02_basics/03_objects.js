//singleton - if object is creater with help of constructor,if created like literals then it wouldnt be singleton
//Object.create - is done through constructor and it contain singleton
//object literal - create object like literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Saurabh",    // keys are auto recored as strings
    "fullName": "Saurabh Kuntal", // this key string can never be retrieve via dot.
    [mySym]: "mykey1",// Symbol is use as key with help of []
    age: 21,
    country: "India",
    email:"abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Wednersday"]
}
//console.log(jsUser["email"]);  // "" is use to enter key as string
// console.log(jsUser.email);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser); // freeze the data from change
// jsUser.email = "abc@meta.com"; // this value will not be reflected back
//console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello User");   
}
jsUser.greeting2 = function(){
    console.log(`Hello ${this.fullName}`);   
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
