// var, let and const

// var x = 1
// var x = 2
// console.log(x)
// // no errors with declaring x twice

// let y = 1
// let y = 2
// console.log(y)
// //throws an error as cannot declare same variable twice

// const z = 1;
// const z = 2;
// z = 2;
// console.log(z)
//throws an error as cannot reassign const variable

//global scope
var x = 1
let y = 2
//const z = 3

//local scope
{
    let y = 4
    const z = 5
}

function myFunction() {
    const z = 5;
    console.log(y)
    {
        let y = 4
        console.log(y)
    }
}

//console.log(y)
// error as y is not defined in globle scope, only local scope

myFunction()
// prints 2 then 4 as first console.log(y) gets value from global scope and second from local scope

var a = 1

console.log(`global: ${a}`)

function myFunc() {
    var a = 2
    console.log(`function1: ${a}`)
    {
        var a = 3
        console.log(`block: ${a}`)
    }
    console.log(`function2: ${a}`)
}

myFunc()

console.log(`global2: ${a}`)
