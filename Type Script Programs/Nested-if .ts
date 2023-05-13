//Nested-if Statement
//The nest if-statement with in if-statement is called nested-if statement
var country=' Pkaistan'
var my_age=21;
if(country=='Pakistan'){
    if(my_age>=18){
        console.log('Here isyour ticket')
    }
    else{
        console.error('Age Restriction!')
    }

}
else{
    console.log('Invalid Country!')
}