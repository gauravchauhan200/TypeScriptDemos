
//Method Overloading and constructor overloading in TypeScript

class Calculator
{
    //constructor overloading

    constructor();  //default constructor
    constructor(a:number,b:number);

    constructor(a?:number,b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b: ",(a+b));
        }
        else{
            console.log("Default constructor called...")
        }
    }

    //Method overloading
    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {return a+b+c}
        return a+b;
    }
}



//USAGE

let calc1= new Calculator();
let calc2=new Calculator(10,20);

//method overloading
console.log("Adding 2 numbers: ",calc1.add(10,20));
console.log("Adding 3 numbers: ",calc1.add(10,20,30));


console.log("Adding 2 numbers: ",calc2.add(10,20));
console.log("Adding 3 numbers: ",calc2.add(10,20,30));