//if condition

/*
if(condition)
    {
    //statements
    }
*/

/*
let age:number=20;
if(age>=18)
    {
    console.log("you are eligible for vote");
    }
*/


//Example 2: Print number is even or odd.

/*
let num:number=10;
if(num%2==0)
    {
    console.log(`${num} Even number`);
    }
else
    {
    console.log(`${num} Odd number`)
    }
*/

//Nested if else

/*
if(condition 1)
    {
    statements;
    }
else if(condition 2)
    {
    statements;
    }
else if(condition 3)
    {
    statements;
    }
else
    {
    statements;
    }
*/


//Example3: Depending on the marks, display appropriate grade.
    /*
    marks >=90 GradeA
    marks >=75 Grade B
    marks >=60 Grade C
    Grade D
    */

    /*
    let marks:number=90;

    if(marks >=90 && marks <=100)
    {
        console.log("Grade A");
    }
    else if(marks>=75 && marks<90)
    {
        console.log("Grade B");
    }
    else if(marks>=60 && marks<75)
    {
        console.log("grade C");
    }
    else
    {
        console.log("Grade D");
    }
*/

//Example 4: Browser selection

/*

let browser:string ="chrome";

if(browser==='chrome')
    {
    console.log("Browser is chrome");
    }
else if(browser==="firefox")
    {
        console.log("Not chrome");
    }
else if(browser==="safari")
    {
        console.log("safari browser");
    }
else
    {
        console.log("other browser");
    }
*/

// Switch case statement

/*
switch (expression)
 {
case value 1: statements;
                break;
case value 2: statements;
                break;
case value 3: statements;
                break;
default: statements;
            
 }
*/
 
//Example 5:Depending on tye value of the day, print the corresponding day of the week

/*
let day:number=1;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;    
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
         break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: console.log("Invalid week")
}
*/

//Example 6: The switch statement can also include an expression

let x: number=10, y:number=5; 

switch(x-y)
{
    case 0: console.log("result zero");
            break;
    case 5: console.log("result is Five")
            break;
    case 10: console.log("result is Ten")
            break;
    default: console.log("result is something else")

}





