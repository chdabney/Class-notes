string.indexOf()
//syntax 
//string.indexOf('searchvalue', start)
//a method denoted by the ()
//will take a string argument in the ()
//argument returns index of item in string starting from 0
 let hamilton = 'polymath pain in the ass'
hamilton.indexOf('o') //will give you the first occurence of 'o'. value returns 1 since 'o' is in the index of 1. 
//.indexOf('i',2)
//search for the virst instance of 'i'starting from search position 2
//is case sensitive

string.replace()
//syntax
//will take in 2 inputs
//String.replace('value to be replaced', 'replacment value')
let kitty = 'frannie is cute'
kitty.replace('cute', 'shitty')
//output will be 'frannie is shitty'

string.toUpperCase()
//syntax
//string.toUpperCase()
//does not take inputs
// () still required as it is a method and not a property
//string.toUpperCase will return uppercased tring

string.toLowerCase()
//mostly same as above

string.slice()
//syntax
//string.slice('start', 'end')
//takes in 2 arguements.
//input can be two input numbers - start point and end point
//slices everything not included in start and end.
//single input will give you everything from start point on. 
let eliza = 'look around, look around!'
eliza.slice(0, 11)
//will output 'look around'
eliza.slice(12)
//will ouput 'look around!'

string.split()
//willconvert string to an array
//inputs in () are known as delimiters
 let Hamilton = 'Not throwing away my shot'
string.split('not')
// output will be 'throwing away my shot'
//delimiter is removed from string

//number methods

Number.isInteger(num)
//will give true or false depending if num is a whole number or not

num.toString()
//converts number to string

Math.pow()
//raise integer to a power
Math.pow(3, 3)
//output will be 3*3*3 = 27

Math.abs()
//gives absolute value
Math.abs(2)
//will return 2
Math.abs(-2)
//will also give 2

Math.round()
//rounds up
Math.round(7.65)
//returns 8

Math.floor()
//rounds down
Math.floor(7.65)
//will return 7

Math.min()
//returns the minimum of a list of numbers
Math.min(7, 8, 4, 1, 100)
//will return 1

Math.max()
//opposite of above

Math.random()
//outputs random number between 0 and 1.
// 0, .5, .6, .45, .39, 1, ect
Math.random()*10
//will return random value between 1 and 10.
//combine with Math.round() to get a number without a decimal.
Math.round(Math.random)*10