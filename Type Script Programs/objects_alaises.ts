/*In TypeScript, aliasing allows you to
create a new name for an existing type.
This can be useful for making your code 
more readable and reducing the amount of 
repetition.*/

// Aliased Object Type
type Student = {
    name: string,
    age: number
}

let students: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(students.age);

//Interface
/*an interface is a way to define a contract
for an object, describing the expected shape 
of its properties and methods. It allows you
to define the structure of an object without
specifying any implementation details.*/

interface Person {
    name: string;
    age: number;
    greet: () => void;
  }
  
  //Interface Function
  
  function sayHello(person: Person) {
    console.log(`Hello, ${person.name}!`);
    person.greet();
  }
  
  const john: Person = {
    name: 'John',
    age: 30,
    greet: () => console.log('Nice to meet you!'),
  };
  
  sayHello(john);
  