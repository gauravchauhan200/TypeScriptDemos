// Arrow function /Lambda Function

/* Lamda refers to anonymous functions in programming.
    lamda functions are a concise mechanish to represent anonymous function.
    These functions are also called as Arrow functions.


    There are 3 parts to a Lambda function.

    1. Parameters- A function may optionally have parameters.
    2. The fat arrow notation/lambda notation(=>) - It is also called as the "goes to operator".
    3. Statements- represent the functions instruction set.


    Syntax:

    let variable = (parameters) =>
    {
    //block of code
    }
    variable();

*/

    //Example1: Arrow Function with No parameters and No Return Type 
/*
    let greet=():void=>
    {
     console.log("hello Typescript")   
    }
    greet();
*/

//Example 2: Arrow function with parameter and return type
/*
    let add=(a:number, b: number): number =>
    {
        return a+b;
    }
    console.log(add(10,20));
*/

//Example 3: Arrow function with Implict Return
/*
    let add=(a:number, b:number):number => a+b; 
    let multiply=(a:number, b:number):number => a*b;

    console.log(add(10,20));        
    console.log(multiply(10,20));
*/

//Example 4: Arrow function with optional parameters
    //if we make 1st parameter optional the next parameter should also be optional, its limitation

/*
  let displayDetails = (id:number,name:string,mailId?:string):void =>
    {
        console.log("ID:",id);
        console.log("Name:",name)

        if(mailId !==undefined)
        { console.log("Email:",mailId);
        }
    }
    displayDetails(123,"scott","scot@gmail.com")
    displayDetails(123,"scott")
*/

//Example 5: Arrow function with default parameters
/*
    let calculateDiscount = (price:number,rate:number=0.5):void =>
      {
        let discount:number=price*rate;
        console.log("Discount Amount:",discount);  
    }
    calculateDiscount(1000,0.3);
    calculateDiscount(1000);
*/

//Example 6: Arrow function with Rest Parameters
/*
     let findElements=(...elements:(number | string)[]):number=>
    {
        return elements.length
    }
    console.log( findElements(3,"john",2,1,"scott"));
    console.log( findElements(3,4,4,45,5,8,5));
    console.log( findElements("dfds","john","sdfds","scott"));
*/
