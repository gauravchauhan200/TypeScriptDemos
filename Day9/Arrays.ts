/*
Arrays in  TypeScript
----------------------
-An array is a special type of variable that stores multiple values.
-The values can be of the same data type or different data types.
-Arrays are declared using '[]' or the generic 'Array<T>' type.
-Indexing starts from 0.
-Arrays are an ordered collection of elements.
*/


//Approach 1: using leteral
let names:string[]=[]; //declaration

//Initilization/assigning values  --> Not preferable aproach
names[0]="det";
names[1]="ted";
names[2]="jef";
names[3]="jed";

console.log(names)
console.log(names[3])

//declaration and initilization
let names1:string[]=["John","tef","joy","hed"]; //preferable approach
console.log(names1[2]);
console.log(names1);



//Example1: Iterating over an array using a traditional for loop

let employes: Array<string>=["John","Tom","Ham","Scott"];
let empIds: Array<number>=[101,105,107,209,289];
let data: Array<string|number>=["John",101,"Tom",103,"ted",106];
let mixedData: Array<any>=[1,"John",true,null];

console.log("---Iterating over an array using a traditional for loop--");

for(let i=0;i<=employes.length-1;i++)
{
    console.log(employes[i]);
}

//Example2: Iterating using the "for....in" loop (index)
console.log("----Iterating using the for....in loop---");

for(let i in empIds)
{
    console.log(empIds[i]);
}

//Example3: iterating using the "for....of" loop (values)
console.log("----iterating using the for....of loop----");

for(let v of data)
{
    console.log(v);
}

//Example 4: Passing an Array to the function
    console.log("Search an element in a n array using function");

//Search an element in a n array using function


function search(ele:number,arr:number[]):boolean
{
    for(let i=0;i<arr.length;i++)
    {
            if(arr[i]===ele)
            {
                return true;
            }
    }
    return false;
}
let arr:number[]=[10,20,30,40,50];
console.log(search(30,arr));
console.log(search(100,arr));


//Example 5: A function takes an array and return an array

function capitalizeWords(arr1:string[]):string[]
{
    let result:string[]=[];

    for(let i=0;i<arr1.length;i++)
    {
        result[i]=arr1[i].toUpperCase();
    }
    return result;
}

let words:string[]=["hello","world","TypeScript"];
console.log(capitalizeWords(words));


