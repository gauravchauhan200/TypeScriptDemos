


//Tuples in TypeScript:
// A tuple is a fixed-lenth array where each element has a specific type.
// It helps in storing multiple fields of different data types together.


//Example1: tuple with 2 values of string number

    let person:[string,number]=["John",101];

    console.log(person[0]);
    console.log(person[1]);

//Example 2: Tuple with multiple values
    console.log("---------------")

    let user:[number,string,boolean,number,string]=[10,"John",true,101,"Welcome"]
    console.log(user);

//Example 3: Iterating over a tuple using a traditional for loop

    for(let i=0;i<=user.length-1;i++)
    {
        console.log(user[i])
    }

//Example 4: Iterating using a "for---in" loop


    for(let i in user)
    {
        console.log(user[i])
    }

//Example 4: Iterating using a "for---of" loop


    for(let value of user)
    {
        console.log(value)
    }

//Exaple 5: Tuple array (Array of Tuples)

    let students:[number,string][]=[[101,"John"],[102,"Peter"],[103,"scott"]];
    console.log(students.length);
    console.log(students[0]);
    let tp=students[0];
    console.log(tp[0]);



    