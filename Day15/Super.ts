
//super()   - used to invoke immediate parent class constructor.
//super     - used to invoke immediate parent class method.
//super - can not be used to invoke the parent class property but in java it is possible

class Parent
{
    num:number=10;

        constructor()
        {
            console.log("This is parent class constructor...");
        }

        display()
        {
            console.log("This is display() method from parent class..");
        }
}

class Child extends Parent
{
    num:number=20;      //overriden
   
    constructor()
    {
        super();        //this will call parent class constructor (mandatory)
        console.log("This is child class constructor...");
    }  

    show()
    {
       // console.log(super.num);
        console.log("This is child class number",this.num); 
        console.log("This is show() method from the child class...")
    }

    display()  //overridden
    {
        super.display(); // this will invoke the parent class
        console.log("This is display() method from child class....")   
    }

}

    let c1 = new Child();
    c1.show();
    c1.display();