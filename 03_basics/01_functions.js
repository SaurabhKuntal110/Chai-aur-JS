function myName(){
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("T");
    console.log("A");
    console.log("L");
}

//myName();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);    
// }
//addTwoNumbers(3,5)

function addTwoNumbers(num1,num2){
    return num1+num2    
}
const result = addTwoNumbers(3,5)
//console.log(result);

function userLoginMessage(user){
    if(user === undefined) //(!user)
    {  
        console.log("Please Enter a valid User Name!");
        return    
    }
    else{
        return `${user} just logged in!`
    }
}

//console.log(userLoginMessage("Saurabh Kuntal"));


function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400))

const user = {
    userName: "Saurabh",
    price: 150
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    userName:"Sam",
    price: 200
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));