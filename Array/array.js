let emptyArray=[]; // js array Empty

//Array using constructor method 

let students= new Array(3); // creating array with inintial size of 3 

let Marks = new Array(1,2,3); // creting an array with three number 1,2,3.

let company = new Array('Virtusa'); // creating an array with 1 Element.

// Normal method 

let FRONTEND = ['REACT', 'ANGULAR', 'VUE', 'SAVLET', 'NEXT', 'NUXT']


let BACKEND = ['EXPRESS', 'DENO',]


console.log('FRONTEND:', FRONTEND)

//Getting the Value using index
console.log('FRONTEND:', FRONTEND[0])
console.log('FRONTEND:', FRONTEND[3])
console.log('FRONTEND:', FRONTEND[2])
console.log('FRONTEND:', FRONTEND[5])


//Change Data useing index 
FRONTEND[2] = 'VUEJS'

console.log('FRONTEND:', FRONTEND[2])

console.log('FRONTEND:', FRONTEND)