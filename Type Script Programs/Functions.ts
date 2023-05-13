//Syntax
/*function(parameters){
    block of statement
}*/

//Parameter type annotation
function greet(name:string){
    console.log('Hello'+' '+name.toUpperCase()+'!!')
}
greet('Abdul Rehman')

//Return Type Annotation
function fav_number():number{
    return 21;
}
console.log(fav_number())

/*Named Functions=>The name that can be associated with the fucntion
                   is called Named Function*/
function plus(a:number,b:number){
         return a+b;
}                   

/*Anonmous Function=>The function the haven't any name associated with in it 
                     is called Anonmous Function*/
let myplus=function(a:number,b:number){
    return a+b;}                     


//Anonmous function with explicit type
let sum1:(a:number,b:number)=>number=function(a:number,b:number):number{
    return a+b;

}


//Arrow Fucntion/Lambda Function 
//Syntax
/*let variable=(exp)=>{ block of statement}*/
let sum=(a:number,b:number)=>{
    return a+b;
}





