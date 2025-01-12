const array = ["item_1", "item_2", "item_3"];


// DESTRUCTURING
console.log("DESTRUCTURING")
const head = ([first]) => first;
console.log(head(array))

//REST
console.log("REST")
const tail = (_first,...args) => {
    console.log(args)
}; 
tail(...array)

//PROTOTYPE ARRAY
console.log("PROTOTYPE ARRAY")
const allExceptLast = (arr) => arr.slice(0, -1);
console.log(allExceptLast(array))

// last item of array, array functions
console.log("last item of array, array functions")
const last = (list) => list[list.length-1];
console.log(last(array))

