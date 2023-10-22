// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied.

// window.alert(window.location)
// alert(location)

//window.localStorage
//window.sessionStorage
const myArray = ["eat", "sleep", "code"]
const myObject = {
    name: "Karen",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name)
    }
}

//convert to string using JSON.stringify(), then convert back to object/array using JSON.parse()
//However, lose methods when using JSON with objects

// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray))
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"))
// console.log(mySessionData)

localStorage.setItem("myLocalStore", JSON.stringify(myArray))
//localStorage.removeItem("myLocalStore")
//localStorage.clear()
const key = localStorage.key(0)
const lengthStorage = localStorage.length
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))
console.log(lengthStorage)
console.log(key)
console.log(myLocalData)





