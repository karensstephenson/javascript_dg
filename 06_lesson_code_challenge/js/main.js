// First Code Challenge

// Write code that will return a random letter from your name
let name = 'Karen'
let randomNumber = Math.floor(Math.random()*name.length) 
let randomLetter = name.charAt(randomNumber)

console.log(randomLetter)