
//Declaration of strings


    let str11:string='string with singlequotes';
    let str21:string="string with doublequotes";
    let str31:string=`string with back tick`;
    console.log(str11);
    console.log(str11);
    console.log(str21);

// //when to use back tick

    let num12:number=10;
    console.log("Number is: ",num12);
    console.log(`number is:${num12}`);

//String method

    let str:string="Hello, Typescript!";

//1. length -find the length of a string. or how many characters

    console.log("Length of string: ",str.length);

//2. toUpperCase() and toLowercase()

    console.log("Upper case: ",str.toUpperCase());
    console.log("Lower case: ",str.toLowerCase());

//3. charAt(index) and indexOf(string)

    console.log("character at 4 index: ",str.charAt(4));
    console.log("Index of Type: ",str.indexOf("Type"))

//4. substring(starting index,ending index)
// Ending index is exclussive

    console.log(str.substring(2,4));

//5. includes(): returns true or false(boolean)
//string value is CASE SENSITIVE

    console.log(str.includes("abc"));
    console.log(str.includes("Typescript"));

//6 startsWith() and endsWith();

    console.log("Starts with: ",str.startsWith("Hello"));
    console.log("ends with: ",str.endsWith("!"));

//7 replace()

    console.log("Replaced string: ",str.replace("Typescript","world"));

//split() - break the strings into multiple parts based on delimiter, and returns array.

//Ex: 1
    let words:string[]=str.split(" ");
    console.log(words);

//Ex: 2

    let mystring:string="abc@gmail.com,xyzabc";

    let arr=mystring.split(",");
    console.log("Email: ",arr[0]);
    console.log("Password: ",arr[1]);

//9. trim(),    trimStart(),    trimEnd()
    mystring="   welcome to typescript      ";
    console.log("Orignal string:",mystring);
    console.log("trim string:",mystring.trim());
    console.log("trimStart:",mystring.trimStart());
    console.log("trimEnd:",mystring.trimEnd());

//10 concat()

    let str1:string="welcome";
    let str2:string="to typescript";
    let str3:string="and javascript";

    console.log("After concatenation",str1.concat(str2));
    console.log("After concatenation:",str1+str2) //  this alternative but not recomended
    console.log("welcome".concat("to typescript"));
    console.log(str1.concat(str2).concat(str3));

//concept of string immutability 
    let num:number=10;

    let res=num+5;
    console.log(res);
    console.log(num);

    let modifiedstring=str1.concat("to typescript");
    console.log(modifiedstring);
    console.log(str1);

//Multiline string

    let multiline:string=`welcome
                    to typescript`;
    console.log(multiline);
    