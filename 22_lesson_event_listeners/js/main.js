// JavaScript Event Listeners
//const view = document.querySelector("#view2")
// console.log(view)
// const div = view.querySelector("div")
// const h2 = div.querySelector("h2")

//Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//     alert("Doing something")
// }

// h2.addEventListener("click", doSomething, false)
// h2.removeEventListener("click", doSomething, false)

// h2.addEventListener("click", (event) => {
//     console.log(event.target)
//     event.target.textContent = "clicked"
// }, false)

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete")
 {
    console.log("readyState: complete")
    initApp() //used to load app when dom is ready
 }})

//  const initApp = () => {
//     const view = document.querySelector("#view2")
//     const div = view.querySelector("div")
//     const h2 = div.querySelector("h2")

//     view.addEventListener("click", (event) => {
        
//         view.style.backgroundColor = "purple"
//         //event.target.style.backgroundColor = "purple"
//     })
//     div.addEventListener("click", (event) => {
//         //event.target.style.backgroundColor = "blue"
//         div.style.backgroundColor = "blue"
//     } )
//     h2.addEventListener("click", (event) => {
//         // event.stopPropagation()
//         event.target.textContent = "Clicked"
//     })
//  }
//  const initApp = () => {
//     const view = document.querySelector("#view2")
//     const div = view.querySelector("div")
//     const h2 = div.querySelector("h2")

//     view.addEventListener("click", (event) => {
//         view.classList.toggle("purple") 
//         view.classList.toggle("darkblue")       
//     })

//     div.addEventListener("click", (event) => {
//         div.classList.toggle("blue") 
//         div.classList.toggle("black")  
//     } )

//     h2.addEventListener("click", (event) => {
//         const myText = event.target.textContent
//         myText === "My 2nd View" 
//             ? event.target.textContent = "Clicked" 
//             : event.target.textContent = "My 2nd View"
//     })

//     const nav = document.querySelector("nav")
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100")
//     })
//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100")
//     })
//  }

const initApp = () => {
    const view3 = document.querySelector("#view3")
    const myForm = view3.querySelector("#myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("submit event")
    })

}