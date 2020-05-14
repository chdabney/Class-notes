// while loop


while (condition) {
    //  while this is true, will run this code block. 
    // will come back and check if true then run again
    //  will keep going until false
}


let counter = 1  //<-- defining counter variable as 1
while (counter <= 3) {  //<-- while counter variable is less than or equal to 3 - conditonal that could fail eventually
    counter += 1  //<-- increment counter by 1 change over time every iteration
}

// when counter = 4 code completed and will loop until false

/*While loops need 3 parts:
the variable
the condition
the incrementer*/

//DMG example
let index = 0
while (index < names.length) {
    const name = names[index]
    console.log(name)
    index += 1

}