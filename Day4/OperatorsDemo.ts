
console.log("-----Airthmatic Operators----");

let a:number=10,b:number=23;
//Airthmatic operations

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
console.log(5**2);

console.log("-----Assignment Operators----");
//Assigment Operators 

a=10;
b=5;

console.log(a+=b); //a=a+b; --->15
console.log(a-=b); //a=a-b; ---->10
console.log(a*=b); //a=a*b; ---->50
console.log(a/=b); //a=a/b; ---->10
console.log(a%=b); //a=a%b; ---->0

console.log("-----Relational Operators----");
//Relational Operators or comparison operator
//Returns boolean - true/false
// > <  >= <= != ===(strict equality)

a=10;
b=20;

console.log(a>b);  //false
console.log(a<b);  //true
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a==b); //false
console.log(a!=b); //true

//Difference between ==(equality) ===(Strict equality)

console.log("-----Difference b/n == and ===  ----------------")

let num1:any=10; //number type
let num2:any="10"; //String

console.log(num1==num2); //true (only compare values)
console.log(num1===num2); //false (compares the values and types)

//Logical Operators && || !
//returns true/false (boolean)
// works between boolean variable

//b1    b2      &&(and)   ||(or)      !b1
//-----------------------------------------

//true  true    true    true       false
//true  false   false   true
//false true    flase   true       true
//false false   false   false


console.log("------Logical Operators------");

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);  //false
console.log(b1 || b2);  //true
console.log(!b1);   //false
console.log(!b2);   //true

//combination of logical & relational operators

console.log("-----Mixing of logical and relational operator------");

console.log(20>10 && 10>5); //true
console.log(10<20 || 5>10); //true

