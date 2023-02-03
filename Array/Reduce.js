/*The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and
 executes a provided function for each value of the array (from left-to-right) and the return 
value of the function is stored in an accumulator. 

Syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue)

function(total, currentValue, index, arr): It is the required parameter and is used to run for each element of the array. It contains four parameters which are listed below:
total: It is a required parameter and used to specify the initialValue or the previously returned value of the function.
currentValue: It is a required parameter and is used to specify the value of the current element.
currentIndex: It is an optional parameter and is used to specify the array index of the current element.
arr: It is an optional parameter and is used to specify the array object the current element belongs to.
initialValue: It is an optional parameter and is used to specify the value to be passed to the function as the initial value.
*/

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += number[i];
}

console.log(sum);

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

sum = number.reduce((accumlator, current)=>{ return accumlator + current })

sum = number.reduce(cal)

function cal(accumlator, current) {
    return accumlator + current
}






console.log(sum);


let ShoppingCart = [
    { product: 'iphone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 9.98 },
    { product: 'memeory Card', qty: 2, price: 20.90 },
]

// let total = ShoppingCart.reduce((acc, cur) => {
//     return acc + cur.qty * cur.price;
// }, 0)


let total = ShoppingCart.reduce(TotalCal)

//for Debug

function TotalCal(acc, cur) {
    return acc + cur.qty * cur.price;
}

console.log('total:', total)

//if use reduce()  ---------------Movment------------------>
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//if use reduceRight()  <---------------Movment------------------


sum = number.reduceRight((acc, cur) => {
    console.log('accumulator', acc, 'current ', cur);
    return acc + cur;
});

