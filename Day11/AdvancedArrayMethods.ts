    
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
    
   let numbers:number[]=[1,2,3,4,5];
    
   let doubledNumber=numbers.map((element)=>{
        return(element*2);
    });
    console.log(doubledNumber);