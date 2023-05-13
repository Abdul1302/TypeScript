//Named function with default parameters
function buildName(firstName='Abdul', lastName = "Rehman") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//Anonmous function with default parameters
let buildname2:(firstname:string,lastname:string)=>string=
function(firstname='Abdul',lastname='Rehman'):string{
    if(lastname){
        return firstname+' '+lastname
    }
    else{
        return firstname
    }
}