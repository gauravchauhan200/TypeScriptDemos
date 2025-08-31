  /*Syntax:

    for(initilization;condition;inc/dec)
    {
    //statements;
    }
 */

//Example1: print 1.....10;
      /* 
      for(let i=0;i<=10;i++)
        {
            console.log(i);
        }
      */

//Example2: print even numbers 1....10
/*
  for(let i=2;i<=10;i=i+2)
  {
   console.log(i);
  }
*/

/*
  for(let i=1;i<=10;i++)
  {
    if(i%2==0)
    {
    console.log(i);
    }
  }
*/

// Example4:
  /*
    let i:number; //global variable and local variable

    for(i=1;i<=5;i++)  
    {
      console.log(i);
    }
     console.log(i); //6
  */

     let i:number;
     for(i=1;i<=5;i++); // for loop without any block
     console.log(i);    //6 because first increament happent then condittion check














