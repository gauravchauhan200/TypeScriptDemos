    
//===== foreach(), map(),filter(), reduce(), some(),every() ========


//Ex1: Get index of all the fruits along with value.

    //    let fruits:string[]=["apple","banana","strawberry","Mango"];

    //    for(let i in fruits)
    //    {
    //     console.log(i,fruits[i]);
    //    }



 //Ex: using arrow function
 
    // fruits.forEach((element,index)=>{
    // //  console.log(`${index}`,`${element}`);
    //      console.log(index,element);
    // });

//Ex:2
    
    // fruits.forEach((element)=>{
    //     console.log(element.toUpperCase());
    // });


//2.map()
// Ex1: Get square of all the numbers in a array. Ex: [1,2,3] then result should be [1,4,9]

    // let number:number[]=[1,2,3,4,5];

    // let squaredNumbers=number.map(function(element){
    //     return(element*element);
    // });
    // console.log(squaredNumbers);

//  Ex2: Double each number [1,2,3,4,5]--->[2,4,8,10]
    
    //    let numbers:number[]=[1,2,3,4,5];
        
    //    let doubledNumber=numbers.map((element)=>{
    //         return(element*2);
    //     });
    //     console.log(doubledNumber);

    //if you have single return statement then currly bracket and return is optional and its valid only for arraw function


    //3. fillter()

    //Ex1.  Get the only even numbers from array

        // let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];

        // let evenNumbers=numbers.filter((num)=>num%2==0);
        // console.log(evenNumbers);
 
      // Ex2 
        //     let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
    
        //     let greaterNumbers=numbers.filter((num)=> num>3);
        //     console.log(greaterNumbers);



//Ex 4. reduce()
    //syntax: array.reduce(function(accumulator,currentvalue,index,array){})
    //Ex1 Get sum of all the elements in an array

            // let total = 0;
            // let numbers:number[]=[1,2,3,4,5];
            // for(let i=0;i<numbers.length;i++)
            // {
            //     total=total+numbers[i];
            // }
            // console.log(total);

    //using reduce method

            // let numarray:number[]=[1,2,3,4,5];
            
            // let accumulatedvalue= numarray.reduce((total,element)=>
            // {
            //     return(total+element);
            // });
            // console.log(accumulatedvalue);



//5. some() checks if any element satisfies a condition
    //syntax: array.some(function(currentvalue,index,array){})

    //Ex1 checks array contains negative values

        // let numarray:number[]=[1,2,3,4,-1];

        // let isPositive=numarray.some((element)=>{
        //     return (element<0);
        // });
        // console.log("Does array contains any Negative values", isPositive);

    //Ex 2: Check if any number is even

        //     let numarray:number[]=[1,3,5,7,2];

        //     let result=numarray.some(function(element)
        // {
        //     return(element%2==0);
        // });
        // console.log("Is any number even in the array :  ",result);

//6. every()- checks if all elements satisfy the condition

    //Ex1; check if all numbers are greater than one

    let arraynum:number[]=[2,3,4,5,5,9];

    let allGreater=arraynum.every(function(element){
        return element>1;
    });
    console.log(allGreater);






