const myName = "Saurabh"
const age = "20"
//console.log(myName + " is " + age + " years old");
//console.log(`Hello my name is ${myName},and I am ${age} years old`)

const gameName = new String('Saurabh-sk')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
//console.log(newString);
const anotherString = gameName.slice(-9,5)
//console.log(anotherString);
const newString1 = "   Saurabh   "
//console.log(newString1)
//console.log(newString1.trim())
const url = "https://Saurabh.com/Saurabh%20kuntal"
console.log(url.replace("%20","-"));
console.log(url.includes("chaudhary"))
console.log(gameName.split("-"));
