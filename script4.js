console.log("Hello World"); 
// to print anything

// var declarations are globally scoped or function/locally scoped.

// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

// Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:

    var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    // console.log(hello); // error: hello is not defined
// We'll get an error which is as a result of hello not being available outside the function.

// var variables can be re-declared and updated
// This means that we can do this within the same scope and won't get an error.

    var greeter = "hey hi";
    var greeter = "say Hello instead";
    // console.log(greeter);



    // let is block scoped
    // A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
    
    // So a variable declared in a block with let  is only available for use within that block.
    
       let greeting = "say Hi";
       let times = 4;
    
       if (times > 3) {
            let hello = "say Hello instead";
            console.log(hello);// "say Hello instead"
        }
       console.log(hello) // hello is not defined
    // We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .
    
    // let can be updated but not re-declared.
    // Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:
    
        let greeting = "say Hi";
        let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared


        // const cannot be updated or re-declared
        // This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
        
            const greeting = "say Hi";
            greeting = "say Hello instead";// error: Assignment to constant variable.
