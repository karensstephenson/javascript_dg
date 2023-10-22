// Modules
// type="module" in script tag adds "use strict" automatically to js file
// need to run on server

// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

// import * as Guitars from "./guitars.js"
// // need to change name of default function to 'default'

// console.log(Guitars.default())
// console.log(Guitars.shredding())
// console.log(Guitars.plucking())

import User from "./user.js"

const me = new User("email@email.com", "Karen")
console.log(me)
console.log(me.greeting())

