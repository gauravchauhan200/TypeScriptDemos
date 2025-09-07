
//Parent class

class Person
{
    public name:string;     //public propert - accessible anywhere.
    protected age:number;      //protected property - accessible within the class and its subclasses.
    private ssn:number;        //private property -accessible only within this class.

    constructor(name:string,age:number,ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;

    }   
    
    public displayinfo()
    {
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
        console.log("SSN :",this.ssn);
    }

}

//child class

class Employee extends Person
{
    private employeeId:number;

    constructor(name:string,age:number,ssn:number,employeeId:number)
    {
        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    showEmployeedetails()
    {
        console.log(this.name);     //public - accessible
        console.log(this.age);      //protected - accessible
        //console.log(this.ssn);    //Error: private property
        console.log(this.employeeId);   //private, still we can access, since it is declared inside the same class.

    }
}

    let emp=new Employee("John",30,2123134,101);
    emp.displayinfo();
    emp.showEmployeedetails();

    console.log(emp.name);      //accessible
   // console.log(emp.age);     //Not accessible
   // console.log(emp.ssn);     // Not accessible