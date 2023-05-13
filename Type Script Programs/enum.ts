/*an enum is a way to define a set of named
constants. It allows you to define a set of
values that can be used as alternatives to 
hardcoding numeric or string values in your
code.*/

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
  }

  console.log(Color.Green) //output:green 

/*enum values can also be accessed by their
 numeric index, starting from zero*/

 enum Color {    //starts with 0
    red ,
    green,
    blue 
  }
console.log(Color.green)  //output:1
  
//now it starts from 4 because we assign it to a value
enum Color {    
    peech=4 ,
    purple,
    black 
  }
console.log(Color.black)  //output:6
  
