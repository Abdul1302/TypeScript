//Named function with optional parameters
function buildname(firstname:string,lastname:string){
    if(lastname){
        return firstname+' '+lastname
    }
    else{
        return firstname
    }

}

//Anonmous function with optional parameters
var buildname1:(firstname:string,lastname:string)=>string=
function(firstname:string,lastname:string):string{
    if(lastname){
        return firstname+' '+lastname
    }
    else{
        return firstname
    }

}
