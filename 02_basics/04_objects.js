//const tinderUser = new Object() // singleton object
const tinderUser = {}   //this is also object, but as a literal 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "User@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Saurabh",
            lastName: "Kuntal"
        }
    } 
}

//console.log(regularUser.fullName.userFullName.lastName);

const obj1 ={ 1:"a", 2:"b"}
const obj2 ={ 3:"c", 4:"d"}
const obj3 ={5:"e",6:"f"}
//const obj4 = {obj1,obj2}
//const obj4 = Object.assign({},obj1,obj2,obj3) //this will create an empty object(target) and copy all values in it, target == obj4

//const obj4 = Object.assign(obj1,obj2,obj3) //gives sames result but the values will be copied in obj1vthus change the obj1

//const obj4 = {...obj1,...obj2,...obj3} // via spread

//console.log(obj4);

//via database array
const users = [
    {
        id: 1,
        email: "abc@email.com"
    },
    {
        id: 2,
        email: "pqr@email.com"
    },
    {
        id: 3,
        email: "xyz@email.com"
    }
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); 
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//all will return array datatype thus we can access the keys/values/entries via loops

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//hasOwnProperty is use to check weather the object has the keywith following name to avoid crashing


//------------Destructuring Objects ------------------

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor //long to access value everytime thus we store its value in teacher
const {courseInstructor: teacher} = course //syntax
console.log(teacher);

//----JSON File is a Object---
// in json keys are also written an strings
// {
//     "courseName": "JS in hindi",
//     "price": 999,
//     "courseInstructor": "Hitesh"
// }
//also a json format
[
    {},
    {},
    {}
]

