
let cards      = []
let result     = 0
let blackJack  = false
let isAlive    = false
let message    = ""
let player     = {
    name   : "Kaung",
    chips  : 150
}
let messageEl = document.getElementById("message-el")
let sumEl     = document.getElementById("sum-el")
let cardEl     = document.getElementById("card-el")
let playerEl  = document.getElementById("player-el")
 
playerEl.textContent = player.name + " : $" + player.chips


function startGame (){
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber,secondNumber]
    result = firstNumber + secondNumber
    isAlive = true
    renderGame()
}
function renderGame () {
    cardEl.textContent = "Card: " 
    for(i = 0 ; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + result
    if (result <= 20 ){
        message = "Do you want to draw a new card? "
    }else if(result === 21 ){
        message = " You've got Blackjack!"
        blackJack = true
    }else{
       message = "You're out of the game!"
       isAlive  = false
    }   
    messageEl.textContent = message
}
function newCard() {
    let drawCard  = getRandomCard()
    if(isAlive === true && blackJack === false){
        cards.push(drawCard)
        result = result + drawCard
        renderGame ()
    }
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *13) + 1
     if(randomNumber === 1){
         return 11
     }else if(randomNumber >= 11){
         return 10
     }else{
        return randomNumber
     }
   
}

//  let skills = ["HTML","CSS","JavaScript","Git","React"]
//  let mySelf = ["Kaung Pyae Sone",21,true]
//  skills.push("NodeJs")

//  let messages = [
//      "Hey,how's it going",
//      "I'm great,thank you! How about you",
//     "All good.Been Working on my portfolio lately."
//  ]

//  let newMessage = "Same here!"

//  messages.push(newMessage)
//  console.log(messages)

//  messages.pop()

//  console.log(messages)

//  messages.push(newMessage)
//  console.log(messages)
// messages.push("Fighting bro")
//  for ( let i = 0 ; i < messages.length ; i += 1){
//      console.log(messages[i])
//  }

// let cars = [7,3,9]

// for (let i = 0; i < cars.length ; i+= 1){
//     console.log(cars[i])
// }

// let randomNumber = Math.floor ( Math.random() * 6 ) + 1

// console.log(randomNumber)


// let flooredNumber = Math.floor(0.455464)

// console.log(flooredNumber)

// function rollDice(){
//     return Math.floor(Math.random ()* 6) + 1
// }

// let roll = rollDice()
// console.log(roll)