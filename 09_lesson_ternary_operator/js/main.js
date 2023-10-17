// Conditionals: Ternary Operator

//Syntax
// condition ? ifTrue : ifFalse;

let soup = "chicken noodle soup";
let response = soup ? "Yes, we have soup" : "Sorry, no soup today";

console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you"
  : soup
  ? `Yes, we have ${soup}`
  : "No soup today";

console.log(soupAccess);


let testScore = 79
let myGrade = testScore > 89 ? 'A'
: testScore > 79 ? 'B'
: testScore > 69 ? 'C'
: testScore > 59 ? 'D'
: 'F'
console.log(`My test grade is a ${myGrade}`)

let playerOne = 'rock'
let computer = 'scissors'
let result = playerOne === computer ? console.log("It's a tie") 
: playerOne === 'rock' && computer === 'paper' ?
console.log('Computer wins') 
: playerOne === 'paper' && computer === 'scissors' ?
console.log('Computer wins') 
: playerOne === 'scissors' && computer === 'rock' ?
console.log('Computer wins')
: console.log('PlayerOne wins') 