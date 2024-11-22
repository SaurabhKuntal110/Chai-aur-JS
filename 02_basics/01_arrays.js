const myArr1 = [0,1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);
const myHeroes = ["shaktiman","Doga","Nagraj"];
//console.log(myHeroes[2]);

//Array Methods

// myArr1.push(6) // add value at end
// myArr1.pop();  // remove value from end
//myArr1.unshift(9); // add the value to start but it shift every value by one shift
//myArr1.shift(); // remove the value from start

//console.log(myArr1.includes(8));
//console.log(myArr1.indexOf(4));
//console.log(myArr1.indexOf(8));

const newArray = myArr1.join(); //.join convert it to string
//console.log(myArr1);
//console.log(newArray);

console.log("A ", myArr1);
const myNewArr1 = myArr1.slice(1,3); //slice didnt manipulate origin array
console.log(myNewArr1);
console.log("B ", myArr1);
const myNewArr2 = myArr1.splice(1,3); // manipulate original array
console.log(myNewArr2);
console.log("C ", myArr1);

