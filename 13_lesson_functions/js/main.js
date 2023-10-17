// Functions

// Methods = Built-in functions

"Karen".toLowerCase()
Math.random()

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(2, 6))

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf('@'))
}

console.log(getUserNameFromEmail('karen@hotmail.com'))

// const getUserNameFromEmail = function (email) {
//     // code here
// }

// const getUserName = (email) => {
//     // code here
// }

const toProperCase = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase('kaReN'))