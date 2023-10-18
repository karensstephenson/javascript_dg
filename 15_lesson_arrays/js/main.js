// Arrays
// const myArray = [];

// // add elements to an array
// myArray[0] = "Karen"
// myArray[1] = 5
// myArray[2] = true
// myArray[3] = 1001
// myArray[4] = "word"

// refer to an array
// console.log(myArray)

// // length property
// console.log(myArray.length)

// //last element in an array
// console.log(myArray[myArray.length-1])

// console.log(myArray[1])

// myArray.push("school")
// console.log(myArray)

// const lastItem = myArray.pop()
// console.log(myArray)
// console.log(lastItem)

// const newLength = myArray.unshift(42)
// console.log(myArray)
// console.log(newLength)

// const firstItem = myArray.shift()
// console.log(myArray)
// console.log(firstItem)

// do not use
// delete myArray[1]
// console.log(myArray)
// console.log(myArray[1])

//removes one item from index 1
// myArray.splice(1, 1);

// console.log(myArray)

//replaces an item at position 1 with 42
//myArray.splice(1, 1, 42)

//replaces an items at position 1 with 42 and 34
//myArray.splice(1, 1, 42, 34)

//replaces 2 items at position 1 and 2 with 42 and 45
// console.log(myArray)
// myArray.splice(1, 2, 42, 45)
// console.log(myArray)
// //replaces index 4 with 42 and adds index 5 = 45
// myArray.splice(4, 2, 42, 45)
// console.log(myArray)

// // inserts 42 and 45 at position 2
// myArray.splice(2, 0, 42, 45)
// console.log(myArray)

//splice(start index, how many to delete, what to add)

// const myArray = ['A', 'B', 'C', 'D', 'E', 'F']
// console.log(myArray)
// //starts at 2 ends at 4
// const newArray = myArray.slice(2,5)
// console.log(newArray)

// myArray.reverse()
// console.log(myArray)

// const newString = myArray.join()
// console.log(newString)

// const newArr = newString.split(',')
// console.log(newArr)

// const myArrayA = ['A', 'B', 'C']
// const myArrayB = ['D', 'E', 'F']

// const newArray1 = myArrayB.concat(myArrayB)
// console.log(newArray1)

// const newArray2 = [...myArrayA, ...myArrayB]
// console.log(newArray2)

// //gives nested arrays
// const newArray3 = [myArrayA, myArrayB]
// console.log(newArray3)

const shelfA = ['A', 'B', 'C']
const shelfB = ['D', 'E', 'F']

const clothesShelfA = ['G', 'H', 'I']
const clothesShelfB = ['J', 'K', 'L']

// console.log(shelfA[1])
// console.log(clothesShelfB[0])

const shelf = [shelfA, shelfB]
const clothesShelf = [clothesShelfA, clothesShelfB]

// console.log(shelf)
// console.log(clothesShelf)

// console.log(shelf[0][1])
// console.log(clothesShelf[1][0])

const store = [shelf, clothesShelf]
console.log(store)

console.log(store[0][0][1])
console.log(store[1][1][0])












