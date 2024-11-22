let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());

//let myCreateDate = new Date(2024,2,27);
let myCreateDate = new Date("2-27-2024");
//console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);

let myNewDate = newDate.toLocaleString('default',{
    weekday: "long"
});
console.log(myNewDate);
