// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];


// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

//Named Tuples

var graph: [x: number, y: number] = [55.2, 41.3];

//Destructive Tuples
//Since tuples are arrays we can also destructure them.

var graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;