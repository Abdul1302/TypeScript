//Syntax
/*for(exp-1;exp-2;exp-3){
   Block of Code
} */

//Print Hello World 6 times
var h='Hello World'
for(let i=0;i<=5;i++){
    console.log(i,h)
}

//for-loop with array
var nam=['abdullah','abdul rehman','usman','ali','abu-bakar','umer']
for(let i=0;i<=nam.length;i++){
    console.log(i,nam[i])
}

//for loop with if and else statement
var cleancity=['Karachi','Lahore','Sialkot','Peshawar','Islamabad']
for(var i=0;i<=cleancity.length;i++){
    if(cleancity[i]=='Islamabad'){
        console.log('It is one the cleanest and beautiful city of Pakistan')
    break;
    }
    else{
         console.log('Match Not Found')
}
}