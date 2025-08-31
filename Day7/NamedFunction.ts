// Named Function: A function that is declared with a name.

    /* Syntax

    function functionName(parameter):returnType
    {
        //block of code
    }

    functionName(); //calling the function /invoking the function

    */

 // Example1: Named function with no parameterand no return type
    /*
     function display(): void
     {
         console.log("Welcome to typescript");
     }
      display();  //calling function
    */

//Example2: named function with parameters and return type
    /*
      function addNumbers(x:number,y:number):number
      {
        return x+y;
      }

      //let res:number=addNumber(2,3);
      //console.log(res);

      console.log(addNumbers(2,3)); //return value will be printed  console.log
     */
    
 //Example 3: Named function with Rest parameters
      // Rest parametees dont restrict the number of values that yo can pass to a function

    /*
      function addNumber(...nums:number[])
        {
            let i;
            let sum:number=0;
            for(i=0;i<nums.length;i++)
            {
                    sum =sum+nums[i];
            }
            console.log("sum of the numbers",sum)
        }
        addNumber(1,2);
        addNumber(1,2,3);
        addNumber(10,20,30,40,50);
    */

//examples4: Named function with rest parameters- multiple types

    /*
    function findElements(...elements:(number | string)[]):number
    {
        return elements.length
    }
    console.log( findElements(3,"john",2,1,"scott"));
    console.log( findElements(3,4,4,45,5,8,5));
    console.log( findElements("dfds","john","sdfds","scott"));
   */


//Exaple5:  Named function with optional parameters

/*    function displayDetails(id:number,name:string,mailId?:string):void
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

//Example6: Named function with Default Parameters
/*
    function calculateDiscount(price:number,rate:number=0.5):void
      {
        let discount:number=price*rate;
        console.log("Discount Amount:",discount);  
    }
    calculateDiscount(1000,0.3);
    calculateDiscount(1000);    //it will take default value of parameter
*/













