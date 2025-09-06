
//Object- object contains properties and behaviour.
//object contains variables and methods
//object is collection of key and value pairs.

//Ex:

//employee --name, desig, sal, dep
//              bonus(),getemdetails(),setdetails()

//student- name,sid,grade
        //getdetails(),setdetails()

       
       
 // Differents ways to create an object inJS/TS //
 let employee ={

    name:"John",
    age:30,
    salary:50000,
    job:"Engineer",
    getDetails:function():string{
      //  console.log(this.name, this.age, this.salary,this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}` ;
    }
 }
 console.log(typeof employee);

 //accesing object= approach 1(using . notation)
 console.log(employee.name,employee.salary,employee.job);
 console.log(employee.getDetails());

    