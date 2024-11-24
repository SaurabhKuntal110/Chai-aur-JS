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

console.log(userLoginMessage("Saurabh Kuntal"));
