// const score = 98
// console.log(score);
// console.log(typeof(score));

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(typeof(balance))
//console.log(balance.toFixed(2)) shows foxed number of decimal values 

const otherNumber = 123.8656

//console.log(otherNumber.toPrecision(4)); round of the value to precision unit digit is prioritise over decimal value
const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); convert the value into number system makes it easy to find number of zeroes

//+++++++++++MATHS++++++++++++++++++

//console.log(Math);

//console.log(Math.abs(-5));//convert negative value to positive values

// console.log(Math.round(4.4));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,6,2,6,8));
// console.log(Math.max(4,6,2,6,8));

//console.log(Math.random()); //values lie between 0-1
//console.log((Math.random()*10)+1); //1 is added to avoid the case of 0.01-- *10 = 0.1 to prevent it we add 1 so as min should be 1.1 

//console.log(Math.floor((Math.random()*6))+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max-min) +1))+min) // (max-min) to get the range & (+1) to avoide zero, later min is added to make sure the value will be > min value

