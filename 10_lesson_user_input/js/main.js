//User input

//alert('hello world')

// let myBoolean = confirm('Okay === True\nCancel === False')
// console.log(myBoolean)

let name = prompt('Please enter your name.')
if (name) {
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name.trim()) 
} else {
    console.log("You didn't enter your name")
}


