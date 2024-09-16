// Cara membuat object dengan javascript
// 1. Object Literal
// let player = {
//     name: "player",
//     energy: 10,
//     eat: function (portion) {
//         this.energy = this.energy + portion
//         console.log(`name : ${this.name}`)
//         console.log(`energy : ${this.energy}`)
//     }
// }

// player.eat(20)

// 2. Function Declaration
// function player(name, energy) {
//     let player = {}
//     player.name = name
//     player.energy = energy

//     player.eat = function (portion) {
//         player.energy += portion
//         console.log(`Halo ${player.name} your energy is ${player.energy} `)
//     }

//     player.play = function (time) {
//         player.energy -= time
//         console.log(`Halo ${player.name} your energy is ${player.energy} `)
//     }

//     return player
// }

// let ali = player("ali", 10)
// ali.eat(20)
// ali.play(5)

// 3. Constructor
function player(name, energy) {
    this.name = name
    this.energy = energy

    this.eat = function (portion) {
        this.energy += portion
        console.log(`Halo ${this.name} your energy is ${this.energy} `)
    }

    this.play = function (time) {
        this.energy -= time
        console.log(`Halo ${this.name} your energy is ${this.energy} `)
    }
}

let ali = new player("Ali", 10)
ali.eat(20)
ali.play(5)