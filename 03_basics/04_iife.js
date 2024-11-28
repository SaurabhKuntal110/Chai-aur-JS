// immediately invoked function execution
//iife is use to get rid of the pollution coming from the global scope
// iife should be explicitely closed by a semicolon


(function chai(){               //named iife
    console.log('DB connected');
})();

//(func definition)(use to indicate execution)

(() => {                       //unnamed iife
    console.log('DB 2 connected'); 
})();

((name) => {
    console.log(`${name}`); 
})("Saurabh");