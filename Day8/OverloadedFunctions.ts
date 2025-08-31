
//Step 1: Write a signature of functions
//Step 2: Implement the function
//Step 3: Calling function

//Example1: Different parameter Types(data types)

function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param: number|string):string
{
    if(typeof param === "number")
    {
        return(`User ID is ${param}`);
    }
    else
    {
        return(`User Name is ${param}`);
    }
}

console.log(getInfo(101));
console.log(getInfo("John"));


//Example2: Different number of parameters

function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c;
    }
    return a+b;
}
console.log(add(10,20));
console.log(add(10,20,30));


//Example2: Different return types

function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input :string | number): string|number
{
    if(typeof input==="string")
    {
            return input.toUpperCase();
    }
    else
    {
        return input*2;
    }
}

console.log(processInput("john"));
console.log(processInput(10));

 
//Example 4: 

function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string |number|boolean):string
{
    if(typeof value ==="string")
    {
        return `Hello ${value}`;
    }
    else if(typeof value === "number")
    {
        return  `your age ${value} years old`;
    }
    else
        {
            let res:string= value?"married":"single"
            return res;
        }
}

console.log(greet("John"));
console.log(greet(30));
console.log(greet(true));



