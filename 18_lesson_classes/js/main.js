// Classes
// 
//Factory Function
// function pizzaFactory(pizzaSize) {
//     const crust = 'original'
//     const size = pizzaSize
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     }
// }

// const myPizza = pizzaFactory('small')
// myPizza.bake()



class Pizza {
    crust = 'original'
    #sauce = 'traditional'
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize
        // this.crust = "original"
        // this.toppings = []
    }

    getCrust() {
        return this.crust
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza.`)
    }

    // getToppings() {
    //     return this.toppings
    // }

    // setToppings(topping) {
    //     this.toppings.push(topping)
    // }

    // bake() {
    //     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    // }
}

// const myPizza = new Pizza('pepperoni', 'small')
// myPizza.setCrust("thin")
// myPizza.bake()
// myPizza.setToppings("sausage")
// myPizza.setToppings("onions")
// console.log(myPizza.getToppings())

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize){
//         super(pizzaSize)
//         this.type = "The Works"
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }

// const mySpecialty = new SpecialtyPizza('medium')
// mySpecialty.slice()

const myPizza = new Pizza('large')
myPizza.hereYouGo()
console.log(myPizza.crust)
console.log(myPizza.getCrust())
//console.log(myPizza.#sauce)
