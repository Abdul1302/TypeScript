//Array
//It is used to store multiple data in a single variable 
let fruits=['banana','orange','mango','pineapple','grapes','strawberry']
console.log(fruits)

//Indexing and Calling of Array
//The numbering of an array elements starts from 0
//it can be callable by the indexing numbers 
console.log(fruits[1]) //orange
console.log(fruits[5]) //strawberry

//Adding & Removing Elements In Last of An Array

//POP()=>used to remove the last function from an array
 console.log(fruits.pop()) //return the value that was popped out

//PUSH()=>used to add the element in last of an array
 console.log(fruits.push('Red-anar')) // returns the new array length 

//Removing,Inserting Elements In Beginning of An Array
  
//Shift()=>Used to remove the first element of an array
 console.log(fruits.shift()) //returns the value that was shifted out

//unshift()=>Used to add the new element in the beginning of an array
 console.log(fruits.unshift()) //returns the new array length

//Extracting Elements of An Array
 
//splice()=>Add the new items in an array with the help of indexing
 fruits.splice(2,1,'Apple','Kiwi','Dragon Fruit','Star Fruit') //array.splice(index to start,number of deleting elements,adding elements as much as you wish)
 console.log(fruits)

//slice()=>Creates a new array from the given number of inedex of an array
 fruits.slice(3) 
 console.log(fruits)