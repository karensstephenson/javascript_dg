// Numbers

//An integer is a whole number
const myNumber = 42

console.log(myNumber)

//A number with a decimal point is a float which references the 'floating point'
const myFloat = 42.01

console.log(myFloat)

const myString = "42.123a"

console.log(myString)

console.log(myNumber === myFloat)
console.log(myNumber === myString)

console.log(myString + 3)
console.log(Number(myString) + 3)

console.log(Number(myString) === myNumber)

console.log(Number("Karen"))
console.log(Number(true))

//Number methods
//The Number.isInteger() method determines whether the passed value is an integer

console.log(Number.isInteger(myFloat))
console.log(Number.isInteger(myNumber))
console.log(Number.isInteger(myString))

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myString))

//The toFixed() method formats a number according to how many decimal points you provide as a parameter.

console.log(Number.parseFloat(myString).toFixed(2)) //returns a string

console.log(Number.parseInt(myFloat))
console.log(Number.parseInt(myString)) // returns a number

//The toString() method returns a string representing the number
console.log(myFloat.toString())

//Chaining = Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString())

//NaN is an acronym for Not a Number

//The Number.isNaN() method determines whether the passed value is Nan AND its type is Number.
Number.isNaN()

console.log(Number.isNaN("Karen")) // false as NaN but not a number

//The global isNaN() function determines whether a value is NaN or not

console.log(isNaN("Karen")) // true as NaN


