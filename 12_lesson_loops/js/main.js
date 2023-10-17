// Loops
// let myNumber = 0
// while (myNumber < 50) {
//     console.log(myNumber)
//     myNumber++
// }


// let number = 50
// do {
//     number += 2;
//     console.log(number)
// } while (number < 50)

// let name = "Karen"
// for (let i = 0; i < name.length; i++) {
//     console.log(name.charAt(i))
// }

let counter = 0;
let myLetter;
let name = "Karen"

// while (true) {
//     myLetter = name[counter];
//     console.log(myLetter)
//     if (myLetter === 'r') {
//         break
//     }
//     counter++
// }

while (counter <= 4) {
    myLetter = name[counter]
    console.log(myLetter)
    if (counter === 1) {
        counter += 2
        continue
    }
    if (myLetter === 'r') {
        break
    }
    counter++
}