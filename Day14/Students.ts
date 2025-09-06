

// 1. Class
// 2. Read only Properties
// 3. Optional property

// 4. Static properties/Methods
    //static properties/methods are common across all the objects
    //static properties/methods can be accessed through class name directly.
    //static properties/methods can be modified using any objects


class Student
{
    readonly studentID:number;  //Read-only property (can be assigned once inside the constructor)
    name:string;                //Regular property
    email?:string;              //Optional property (can be undefined)
    static schoolName:string="GreenWood High"; // Static variable shared among all instances/objects

//constructor
    constructor(id:number,name:string,email?:string)
    {
        this.studentID=id;
        this.name=name;
        this.email=email;
    }
//Method
    displayInfo():void
    {
            console.log("Student ID:",this.studentID);
            console.log("Student name",this.name);
            if(this.email)
            {
                console.log("Email: ",this.email);
            }
            else
                {
                    console.log("Email is not provided");
                }
            console.log("School Name: ",Student.schoolName) //access static property using class name (Student)
    }
    static changeSchoolName(newName:string):void
    {
        Student.schoolName=newName; 
    }
}



//USAGE

    let s1=new Student(101,"John");
    let s2=new Student(102,"Mike","bob@gmail.com"); 

//Display student info
    s1.displayInfo();
    s2.displayInfo();
    //try to modify the studentID of s1 object.
    //s1.studentID=111; //cannot assign to 'studentID' because it is read only property
    //cahnge the school name using static method
    //through object we can not access the static school nme as in java
    Student.changeSchoolName("Sunrise Academy");
    console.log("Display student info after changing school name....");
    s1.displayInfo();
    s2.displayInfo();
