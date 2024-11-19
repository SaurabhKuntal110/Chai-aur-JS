const accountId = 101;
let accountEmail = "Saurabh@email.com";
var password = "12345";
accountCity = "Mathura";
let accountState;
/*
Prefer not to use Var beacuse of the issue in block scope and functional scope
*/

// accountId = 202; //not allowed
accountEmail = "SK@email.com";
password = "54321";
accountCity = "Gurugram";


console.log(accountId);
console.table([accountId,accountEmail,password,accountCity,accountState]);