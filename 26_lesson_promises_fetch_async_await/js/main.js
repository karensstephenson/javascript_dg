// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Aync/Await

// Callbacks

// function firstFunction (parameters, callback) {
//     // do stuff
//     callback()
// }

// // AKA 'Callback hell'
// firstFunction(para, function() {
//     // do stuff
//     secondFunction(para, function() {
//         // do stuff
//         thirdFunction(para, function() {
//             // do stuff
//         })
//     })
// })

// Promises

// 3 states: pending, fulfilled, rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false
//     if (!error) {
//         resolve("Yes, resolved the promise")
//     } else {
//         reject("No, rejected the promise")
//     }
// })

// console.log(myPromise)

// myPromise.then(value => {
//     return value + 1
// })
// .then(newValue => {
//     console.log(newValue)
// })
// .catch(err => {
//     console.error(err)
// })

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("MyNextPromise resolved!")
//     }, 3000)
// })

// myNextPromise.then(value => {
//     console.log(value)
// })

// myPromise.then(value => {
//     console.log(value)
// })

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//  // pending

// console.log(users)

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user)
//         })
//     })

// Async / Await

// const myUsers = {
//     userList: []
// }

// async function myCoolFunction() {

// }

// const myCoolFunction = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json()
//     return jsonUserData
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunction()
//     myUsers.userList = data
//     console.log(myUsers.userList)
// }

// anotherFunc()

// workflow function

// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json()
//     const userEmailArray = jsonUserData.map(user => {
//         return user.email
//     })
//     console.log(userEmailArray)
//     postToWebPage(userEmailArray)
// }

// getAllUserEmails()

// const postToWebPage = (data) => {
//     console.log(data)
// }
// 2nd parameter of fetch is an object

// const getDadJoke = async () => {

//     const response = await fetch("http://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json" 
//             //Accept: "text/plain"  
//         }    
//     })
//     const jsonJokeData = await response.json()
//     //const textJokeData = await response.text()

//     console.log(jsonJokeData.joke)
//     //console.log(textJokeData)
// }

// getDadJoke()

// const jokeObject = {
//     id: "0oO71TSv4Ed", 
//     joke: "Why was it called the dark ages? Because of all the knights." 
// } 

// const postData = async () => {

//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"  
//         },
//         body: JSON.stringify(jokeObject)    
//     })
//     const jsonReponse = await response.json()

//     console.log(jsonReponse)
// }

// postData(jokeObject)



// const requestJoke = async (firstName, lastName) => {

//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&LimitTo=[nerdy]`)

//     const jsonReponse = await response.json()

//     console.log(jsonReponse.value)
// }

// requestJoke("Clint", "Eastwood")



// abstract into functions
// maybe from a form
const getDataFromForm = () => {
    const requestObject = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    }
    return requestObject
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&LimitTo=${requestData.categories}`
}


const requestJoke = async (url) => {
    const response = await fetch(url)
    const jsonReponse = await response.json()
    const joke = jsonReponse.value.joke
    postJokeToPage(joke)
}

const postJokeToPage = (joke) => {
    console.log(joke)
}

// procedural workflow function
const processJokeRequest = async () => {
    const requestData = getDataFromForm()
    const requestUrl = buildRequestUrl(requestData)
    await requestJoke(requestUrl)
    console.log("Finished")
}

processJokeRequest()

