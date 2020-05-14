let myArray = ['this', 'is', 'an', 'array']
//arrays are data structures we use to represent a list of items.
// Arrays are used to store and group multiple values.
// arrays start at 0. First value is index 0, seconded value index 1, ect...
//amount of data in arrays can change - arrays are dynamic.
// arrays can store different data types
let example = ['hi', 1, true, function () { }, myArray]
//arrays are objects giving it access to many key/value pairs. 

myArray.length
//this property will return the number of items or elements in an array.

myArray.push()
//special method for adding data to the end of an array

myArray.pop()
// method to remove data from an array and store into a variable
let removeItem = example.pop('hi')

myArray.shift()
myArray.unshift()
// this methods work similar to pop/push just at the start of the array instead.

myArray.join()
//joins the array into a string concatenated together with an optional delimiter seperating each item.

myArray.split()
// Splits a string on a given delimiter, in order to create an array


//Looping through arrays

let alexanderHamilton = ['a', 'l', 'e', 'x', 'a', 'n', 'd', 'e', 'r']


let i = 0
// We use 'i' as a convention to represent index. we set it at 0 so we start at the first item in our index.

while (i < alexanderHamilton.length) {
    //while the length of the array is less than our index, we will loop until that is no longer true. The index will be one less than our actual length since we start at 0. 
    console.log('I am' + alexanderHamilton[i])
    //this will loop through the index, pull the current item from the array, and concatonate the current index with the string. 
    i++
    //if we do not add an incrementer, the loop will never move past the first index and thus will never be false. 

}


