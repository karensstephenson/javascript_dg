// JavaScript Errors and Error Handling
"use strict"
// variable = "Karen"
// console.log(variable)

//Object..create()

// const name = "Karen"
// name = "Joe"

const makeError = () => {
    let i = 1
    while (i <= 5) {
       try {
        if (i % 2 !== 0) {
            throw new Error("Odd number")
        }
        console.log("Even number")
    } catch(err) {
        console.error(err)
    } finally {
        console.log("...Finally")
        i++
    } 
    }
    
}

makeError()

function customError(message) {
    this.message = message
    this.name = "custom error"
    this.stack = `${this.name}: ${this.message}`
}

