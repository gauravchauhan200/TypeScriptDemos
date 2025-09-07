
//Interitance
//A class can reuse the properties and methods of another class.
//Inhertiance is a mechanism where one class (child) can inherit the properties and methods of another class(Parent).
//Inheritance allows you to reuse the functionality of an existing class without rewriting it.

//Method Overriding:
// A subclass/child class can provide a specific implementation of a method that is already defined in its superclass.
//The method must hace same name, return type, and parameters.

//A----properties +methods
//B exends A--- Properties + methods




//Parent class
class Car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start()
    {console.log("car started")}
    
    stop()
    {console.log("car stopped")}
    
    displayInformation()
    {
        console.log(`Name: ${this.name},Color:${this.color},model${this.model}`);
    }
} 

//Child class
class Honda extends Car
{
    year:number;

    constructor(name:string,color:string,model:string,year:number)
    {
        super(name,color,model)
        this.year=year;
    }

    //overriding method
    start()
    {console.log("Honda started....");}

    yom()
    {console.log(`year of manufacture: ${this.year}`);}

} 
//child class- Maruthi 
class Maruthi extends Car
{
    year:number;

    constructor(name:string,color:string,model:string,year:number)
    {
        super(name,color,model)
        this.year=year;
    }

    //overriding method
    start()
    {console.log("Maruthi started....");}

    yom()
    {console.log(`year of manufacture: ${this.year}`);}

} 

//USAGE

    let honda=new Honda("Honda","Red","Honda City",2024);

    console.log(honda.name);
    console.log(honda.color);
    console.log(honda.model);
    console.log(honda.year);

    honda.start();              //called child class method
    honda.displayInformation(); //parent class
    honda.stop();               //Parent class
    honda.yom()                 //child class


//create Maruti object
    let maruthi=new Maruthi("Maruthi","white","Maruthi Alto",2029);
    
    maruthi.start();                //child class
    maruthi.displayInformation();   //Parent 
    maruthi.stop();                 //parent
    maruthi.yom();                  //child


//Parent class variable is holding child class object

    let car:Car=new Honda("Honda","Red","Honda City",2024);
    
    car.displayInformation();       //parent class
    car.start();        //honda started
    //car.yom();      //Not accessible; defined in the child class but not present in parent class
