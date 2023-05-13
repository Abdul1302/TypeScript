let myname:string|null;
myname='Abdul';
console.log(myname)

myname=null;
console.log(myname)

var myAge: string | number;

myAge = 21;
console.log(myAge);

myAge = "Dont Know";
console.log(myAge);

console.log(myAge.toUpperCase());

if (myAge === "Abdul") {
    // Type of newAge: string
    myAge.toUpperCase(); // Can be called
}

if(typeof myAge === "string"){
    // 'typeof'=>used for find the type
    myAge.toUpperCase();} // Can be called

//make our own types in union literals    
var myage: number | "died" | "unknown";

myage = 90;
myage = "died";
myage = "unknown";