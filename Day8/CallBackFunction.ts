
//Example 1:
// A callback function: A function passed as an argument to another function and executed later.
 /*
    function greet(name:string,callback:(message:string)=>void)
    {
        console.log(name);
        callback("Hello"); //executing the callback function
    }

//callback function
    function showMessage(message:string)
    {
        console.log(message);
    }

//calling the function by passing the callback function

    greet("john",showMessage); 
*/

//Example 2:

/*
    function sum(a:number,b:number,callback:(result:number)=>void)
    {
        let result =a+b;
        callback(result);
    }
 
    //callback function
    function displayResult(result:number):void
    {
        console.log(result);
    }

    sum(10,20,displayResult);
*/
 


